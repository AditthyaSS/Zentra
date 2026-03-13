import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'

// ── TWEAK THESE ──────────────────────────────
// ✅ fix
const FLOWER_Y = 0.05  // raise if floating, lower if underground
const FLOWER_SCALE_MIN = 0.8
const FLOWER_SCALE_RANGE = 0.9
// ─────────────────────────────────────────────

const FLOWER_COLORS = [
    '#f06292', '#ff8a65', '#fff176',
    '#ce93d8', '#80deea', '#ffcc80',
]

function Flower({ position, color, scale, swayOffset }) {
    const ref = useRef()
    useFrame(({ clock }) => {
        if (!ref.current) return
        const t = clock.getElapsedTime()
        ref.current.rotation.z = Math.sin(t * 0.8 + swayOffset) * 0.07
    })
    return (
        <group ref={ref} position={[position[0], FLOWER_Y, position[1]]}>
            {/* stem */}
            <mesh position={[0, 0.15 * scale, 0]}>
                <cylinderGeometry args={[0.02 * scale, 0.02 * scale, 0.3 * scale, 5]} />
                <meshLambertMaterial color="#3a7d2c" />
            </mesh>
            {/* flower head */}
            <mesh position={[0, 0.35 * scale, 0]}>
                <sphereGeometry args={[0.08 * scale, 6, 6]} />
                <meshLambertMaterial color={color} />
            </mesh>
        </group>
    )
}

function GrassBlade({ position }) {
    return (
        <mesh position={[position[0], 0.1, position[1]]} rotation={[0.3, 0.5, 0]}>
            <boxGeometry args={[0.03, 0.2, 0.01]} />
            <meshLambertMaterial color="#4caf50" />
        </mesh>
    )
}

// ─────────────────────────────────────────────
// Usage in TownScene:
//
<FlowerPatch position={[0, 2, 0]} count={5} spread={0.8} />
//   count  — number of flowers (default 5)
//   spread — how wide the cluster is (default 0.8)
//            smaller spread + bigger count = denser patch
// ─────────────────────────────────────────────

export function FlowerPatch({ position = [0, 0, 0], count = 5, spread = 0.8 }) {
    const flowers = useMemo(() => (
        Array.from({ length: count }, (_, i) => {
            const angle = (i / count) * Math.PI * 2 + i * 0.4
            const r = 0.15 + Math.random() * spread
            return {
                pos: [Math.cos(angle) * r, Math.sin(angle) * r],
                color: FLOWER_COLORS[i % FLOWER_COLORS.length],
                scale: FLOWER_SCALE_MIN + Math.random() * FLOWER_SCALE_RANGE,
                swayOffset: i * 1.1,
            }
        })
    ), [count, spread])

    const blades = useMemo(() => (
        Array.from({ length: count + 2 }, (_, i) => {
            const angle = i * 0.9
            const r = (i / count) * spread * 1.1
            return [Math.cos(angle) * r, Math.sin(angle) * r]
        })
    ), [count, spread])

    return (
        <group position={position}>
            {blades.map((b, i) => (
                <GrassBlade key={`b${i}`} position={b} />
            ))}
            {flowers.map((f, i) => (
                <Flower
                    key={`f${i}`}
                    position={f.pos}
                    color={f.color}
                    scale={f.scale}
                    swayOffset={f.swayOffset}
                />
            ))}
        </group>
    )
}