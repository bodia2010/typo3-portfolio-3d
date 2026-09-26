'use client'

import React, { useRef, useMemo, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function useCircleTexture() {
  return useMemo(() => {
    if (typeof window === 'undefined') return null
    try {
      const canvas = document.createElement('canvas')
      canvas.width = 64
      canvas.height = 64
      const ctx = canvas.getContext('2d')
      if (ctx) {
        const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32)
        gradient.addColorStop(0, 'rgba(255, 255, 255, 1)')
        gradient.addColorStop(0.5, 'rgba(255, 255, 255, 0.6)')
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0)')
        ctx.fillStyle = gradient
        ctx.fillRect(0, 0, 64, 64)
      }
      return new THREE.CanvasTexture(canvas)
    } catch (e) {
      return null
    }
  }, [])
}

function ParticleWave() {
  const count = 11200
  const pointsRef = useRef<THREE.Points>(null!)
  const circleTexture = useCircleTexture()
  const scrollRef = useRef(0)

  useEffect(() => {
    if (typeof window === 'undefined') return
    const handleScroll = () => {
      scrollRef.current = window.scrollY || document.documentElement.scrollTop
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const [positions, colors, randomOffsets] = useMemo(() => {
    const pos = new Float32Array(count * 3)
    const col = new Float32Array(count * 3)
    const offsets = new Float32Array(count * 3)
    const colorOrange = new THREE.Color('#FF8700')
    const colorBlue = new THREE.Color('#0070F3')
    const colorDark = new THREE.Color('#0A192F')

    let i = 0
    const rows = 140
    const cols = 80

    for (let x = 0; x < rows; x++) {
      for (let z = 0; z < cols; z++) {
        pos[i * 3] = (x - rows / 2) * 0.65
        pos[i * 3 + 1] = -3.2
        pos[i * 3 + 2] = (z - cols / 2) * 0.65

        offsets[i * 3] = (Math.random() - 0.5) * 8
        offsets[i * 3 + 1] = (Math.random() - 0.5) * 6
        offsets[i * 3 + 2] = (Math.random() - 0.5) * 8

        const mixFactor = Math.random()
        let finalColor = colorDark
        if (mixFactor > 0.82) finalColor = colorOrange
        else if (mixFactor > 0.35) finalColor = colorBlue

        col[i * 3] = finalColor.r
        col[i * 3 + 1] = finalColor.g
        col[i * 3 + 2] = finalColor.b
        i++
      }
    }
    return [pos, col, offsets]
  }, [count])

  useFrame((state) => {
    const time = state.clock.getElapsedTime()
    const maxScroll = typeof document !== 'undefined' ? (document.documentElement.scrollHeight - window.innerHeight) : 1
    const scrollProgress = Math.min(Math.max((scrollRef.current || 0) / (maxScroll || 1), 0), 1)
    const disperseFactor = scrollProgress * 1.8 

    const positionAttribute = pointsRef.current.geometry.attributes.position as THREE.BufferAttribute
    const array = positionAttribute.array as Float32Array

    let i = 0
    const rows = 140
    const cols = 80

    for (let x = 0; x < rows; x++) {
      for (let z = 0; z < cols; z++) {
        const u = x * 0.1
        const v = z * 0.1
        
        const baseX = (x - rows / 2) * 0.65
        const baseY = Math.sin(u + time * 0.8) * 0.45 + Math.cos(v + time * 0.5) * 0.35 - 3.2
        const baseZ = (z - cols / 2) * 0.65

        array[i * 3] = baseX + randomOffsets[i * 3] * disperseFactor
        array[i * 3 + 1] = baseY + randomOffsets[i * 3 + 1] * disperseFactor
        array[i * 3 + 2] = baseZ + randomOffsets[i * 3 + 2] * disperseFactor
        i++
      }
    }

    positionAttribute.needsUpdate = true
    pointsRef.current.rotation.y = THREE.MathUtils.lerp(
      pointsRef.current.rotation.y,
      state.pointer.x * 0.15 + scrollProgress * 0.5,
      0.05
    )
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[colors, 3]}
        />
      </bufferGeometry>
      <pointsMaterial 
        size={0.22} 
        vertexColors 
        transparent={true}
        opacity={0.95} 
        map={circleTexture || undefined}
        alphaTest={0.01}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        sizeAttenuation={true} 
      />
    </points>
  )
}

export default function ThreeDScene() {
  return (
    <div 
      style={{ 
        position: 'fixed', 
        inset: 0, 
        zIndex: 0, 
        pointerEvents: 'none', 
        background: '#020C1B',
        // Expanded mask radius so particles remain visible across the screen and fade smoothly near borders
        maskImage: 'radial-gradient(circle at 50% 50%, black 65%, transparent 100%)',
        WebkitMaskImage: 'radial-gradient(circle at 50% 50%, black 65%, transparent 100%)'
      }}
    >
      <Canvas 
        camera={{ position: [0, 1.5, 9], fov: 60 }}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      >
        <ambientLight intensity={0.6} />
        <ParticleWave />
      </Canvas>
    </div>
  )
}
