import { ThemeProvider } from './components/ui/theme-provider'
import { DockDemo } from './DockDemo'
import { Certificate } from './Certificate'
import { Project } from './Project'
import { CodingProfile } from './CodingProfile'
import { Contact } from './Contact'
// import { CommandDemo } from './CommandDemo'
import { CommandDialogDemo } from './CommandDialogDemo'
// import { CommandMenu } from './CommandMenu'
// import { SparklesPreview } from './SparklesPreview'
// import Meteors from './components/ui/meteors'
// import { BackgroundBeamsWithCollision } from './components/ui/background-beams-with-collision'
// import { Timeline } from './components/ui/timeline'
import { TimelineDemo } from './TimelineDemo'
function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      {/* <CommandDemo /> */}
      <TimelineDemo />
      <CommandDialogDemo />
      {/* <SparklesPreview /> */}
      {/* <CommandMenu /> */}
      {/* <Meteors number={3000} /> */}
      <CodingProfile />
      <Contact />
      <Project />
      <Certificate />
      <DockDemo />

    </ThemeProvider>
  )
}

export default App
