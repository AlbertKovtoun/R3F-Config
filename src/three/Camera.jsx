import { useThree } from "@react-three/fiber"
import { CameraControls } from "@react-three/drei"

export function Camera() {
  const { camera } = useThree()
  camera.position.set(2, 1, 4)

  return (
    <>
      <CameraControls camera={camera} />
    </>
  )
}
