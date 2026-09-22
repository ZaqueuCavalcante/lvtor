<script setup lang="ts">
import { Application, Graphics } from 'pixi.js'
import { onMounted, onUnmounted, ref } from 'vue'

const app = new Application()
const container = ref<HTMLDivElement>()

const FLOORS = 10
const FLOOR_HEIGHT = 70
const BUILDING_WIDTH = 240
const GROUND_HEIGHT = 20

onMounted(async () => {
  await app.init({ resizeTo: window, background: '#87ceeb', antialias: true })
  container.value!.appendChild(app.canvas)

  const ground = new Graphics()

  // building drawn with its origin at the bottom center, so positioning it centers it
  const building = new Graphics()
  const x = -BUILDING_WIDTH / 2
  const top = -FLOORS * FLOOR_HEIGHT

  // building body
  building.rect(x, top, BUILDING_WIDTH, FLOORS * FLOOR_HEIGHT).fill('#b0b0b0').stroke({ width: 3, color: '#333' })

  // dividers between floors
  for (let i = 1; i < FLOORS; i++) {
    const floorY = top + i * FLOOR_HEIGHT
    building.moveTo(x, floorY).lineTo(x + BUILDING_WIDTH, floorY).stroke({ width: 2, color: '#333' })
  }

  // door in the middle of the ground floor
  building.rect(-25, -(FLOOR_HEIGHT - 20), 50, FLOOR_HEIGHT - 20).fill('#6b4226')

  app.stage.addChild(ground, building)

  const layout = () => {
    const groundY = app.screen.height - GROUND_HEIGHT
    ground.clear().rect(0, groundY, app.screen.width, GROUND_HEIGHT).fill('#4a7c3a')
    building.position.set(app.screen.width / 2, groundY)
  }

  layout()
  app.renderer.on('resize', layout)
})

onUnmounted(() => app.destroy(true))
</script>

<template>
  <div ref="container" style="width: 100%; height: 100%" />
</template>
