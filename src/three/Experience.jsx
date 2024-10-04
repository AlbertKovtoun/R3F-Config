import { Canvas } from "@react-three/fiber"
import { Perf } from "r3f-perf"
import { Camera } from "./Camera"

export function Experience() {
  return (
    <>
      <Canvas>
        <Perf position="top-left" />
        <mesh>
          <boxGeometry args={[1, 1, 1]} />
          <meshBasicMaterial color={"red"} />
        </mesh>
        <Camera />
      </Canvas>
    </>
  )
}
