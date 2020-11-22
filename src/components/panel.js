import React from "react"
import { useTexture } from "@react-three/drei/useTexture"
import { useAspect } from "@react-three/drei/useAspect"
import { meshBounds } from "@react-three/drei/meshBounds"
import ReactoryPlaceholder from "../images/Reactory-88.jpg"
import HivePlaceholder from "../images/HIVE_FINAL.jpg"
import CryptoPlaceholder from "../images/CRYPTO_FINAL.jpg"

const Panel = ({ panel }) => {
  const Reactory = useTexture(ReactoryPlaceholder)
  const Crypto = useTexture(CryptoPlaceholder)
  const Hive = useTexture(HivePlaceholder)
  const rScale = useAspect("cover", 1280, 720)
  const cScale = useAspect("cover", 1852, 1042)
  const hScale = useAspect("cover", 1917, 965)
  return (
    <mesh
      raycast={meshBounds}
      scale={panel === 1 ? rScale : panel === 2 ? cScale : hScale}
    >
      <planeBufferGeometry attach="geometry" />
      <meshBasicMaterial
        attach="material"
        map={panel === 1 ? Reactory : panel === 2 ? Crypto : Hive}
      />
    </mesh>
  )
}

export default Panel
