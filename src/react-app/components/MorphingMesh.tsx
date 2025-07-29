import { Canvas, useFrame } from '@react-three/fiber'
import { useRef, useMemo } from 'react'
import * as THREE from 'three'

function AIBrain() {
  const meshRef = useRef<THREE.Mesh>(null)
  
  // Create a more complex geometry for the AI brain
  const geometry = useMemo(() => {
    const geo = new THREE.IcosahedronGeometry(1, 2)
    const positions = geo.attributes.position.array as Float32Array
    
    // Store original positions for morphing
    const originalPositions = Float32Array.from(positions)
    geo.userData = { originalPositions }
    
    return geo
  }, [])

  useFrame((state) => {
    if (meshRef.current && geometry.userData.originalPositions) {
      const time = state.clock.elapsedTime
      const positions = geometry.attributes.position.array as Float32Array
      const original = geometry.userData.originalPositions as Float32Array
      
      // Apply morphing effect
      for (let i = 0; i < positions.length; i += 3) {
        const x = original[i]
        const y = original[i + 1]
        const z = original[i + 2]
        
        // Create organic morphing motion
        const noise = Math.sin(time * 0.5 + x * 2) * Math.cos(time * 0.7 + y * 2) * Math.sin(time * 0.3 + z * 2)
        const scale = 1 + noise * 0.1
        
        positions[i] = x * scale
        positions[i + 1] = y * scale
        positions[i + 2] = z * scale
      }
      
      geometry.attributes.position.needsUpdate = true
      geometry.computeVertexNormals()
      
      // Gentle rotation
      meshRef.current.rotation.x = Math.sin(time * 0.1) * 0.1
      meshRef.current.rotation.y = time * 0.1
      meshRef.current.rotation.z = Math.cos(time * 0.15) * 0.05
    }
  })

  return (
    <mesh ref={meshRef} geometry={geometry}>
      <meshStandardMaterial
        color="#ff6600"
        transparent
        opacity={0.8}
        wireframe={true}
        emissive="#ff6600"
        emissiveIntensity={0.1}
      />
    </mesh>
  )
}

function Connections() {
  const groupRef = useRef<THREE.Group>(null)
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.05
    }
  })

  const connectionPoints = useMemo(() => {
    const points = []
    for (let i = 0; i < 12; i++) {
      const angle = (i / 12) * Math.PI * 2
      const radius = 1.8
      points.push([
        Math.cos(angle) * radius,
        Math.sin(angle) * radius * 0.5,
        Math.sin(angle * 2) * 0.3
      ])
    }
    return points
  }, [])

  return (
    <group ref={groupRef}>
      {connectionPoints.map((point, index) => (
        <mesh key={index} position={point as [number, number, number]}>
          <sphereGeometry args={[0.02, 8, 8]} />
          <meshBasicMaterial color="#ff6600" transparent opacity={0.6} />
        </mesh>
      ))}
      
      {connectionPoints.map((point1, i) => 
        connectionPoints.slice(i + 1, i + 4).map((point2, j) => {
          const points = [
            new THREE.Vector3(...point1 as [number, number, number]),
            new THREE.Vector3(...point2 as [number, number, number])
          ]
          const geometry = new THREE.BufferGeometry().setFromPoints(points)
          
          return (
            <primitive 
              key={`${i}-${j}`} 
              object={new THREE.Line(
                geometry, 
                new THREE.LineBasicMaterial({ 
                  color: "#ff6600", 
                  opacity: 0.2, 
                  transparent: true 
                })
              )} 
            />
          )
        })
      )}
    </group>
  )
}

export default function MorphingMesh() {
  return (
    <div className="w-80 h-80 mx-auto">
      <Canvas
        camera={{ position: [0, 0, 4], fov: 50 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.3} />
        <pointLight position={[2, 2, 2]} intensity={0.5} color="#ff6600" />
        <AIBrain />
        <Connections />
      </Canvas>
    </div>
  )
}
