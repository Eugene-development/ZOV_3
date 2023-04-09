import Hero from './z-module/components/Hero'
import Content from './z-module/components/Content'
import Image from './z-module/components/Image'
import Values from './z-module/components/Values'
import Logo from './z-module/components/Logo'
import Team from './z-module/components/Team'

export default function Company() {
  return (
    <div className="bg-white">
      <main className="isolate">
        <Hero/>
        <Content/>
        <Image/>
        <Values/>
        <Logo/>
        <Team/>
      </main>
    </div>
  )
}
