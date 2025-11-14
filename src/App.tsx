import './App.css'
import { AppSidebar } from './components/app-sidebar'
import { SidebarProvider, SidebarTrigger, SidebarInset } from './components/ui/sidebar'
import { Separator } from './components/ui/separator'
import { BookOpen, Users, Calendar, TrendingUp, Award, FileText } from 'lucide-react'
import { Input } from './components/ui/input'
import { Button } from './components/ui/button'

function App() {
  return (
    <SidebarProvider className="h-screen">
      <AppSidebar />
      <SidebarInset className="h-screen overflow-auto">

        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 h-4" />
          <div className="flex items-center gap-2">
            {/* <h1 className="text-lg font-semibold flex items-end justify-end">TekScholr</h1> */}
            <Input placeholder="Search" className="w-full" />  
            <Button variant="outline">profile</Button>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4">
          {/* Welcome Section */}
          <div className="rounded-lg border bg-card p-6">
            <h2 className="text-2xl font-bold mb-2">Welcome to TekScholr</h2>
            <p className="text-muted-foreground">
              Your comprehensive learning management system
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-lg border bg-card p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Total Courses</p>
                  <p className="text-2xl font-bold">24</p>
                </div>
                <BookOpen className="h-8 w-8 text-blue-500" />
              </div>
            </div>
            <div className="rounded-lg border bg-card p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Active Students</p>
                  <p className="text-2xl font-bold">1,234</p>
                </div>
                <Users className="h-8 w-8 text-green-500" />
              </div>
            </div>
            <div className="rounded-lg border bg-card p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Upcoming Events</p>
                  <p className="text-2xl font-bold">12</p>
                </div>
                <Calendar className="h-8 w-8 text-purple-500" />
              </div>
            </div>
            <div className="rounded-lg border bg-card p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Completion Rate</p>
                  <p className="text-2xl font-bold">87%</p>
                </div>
                <TrendingUp className="h-8 w-8 text-orange-500" />
              </div>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border bg-card p-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <FileText className="h-5 w-5" />
                Recent Courses
              </h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 rounded-md bg-muted/50">
                  <div>
                    <p className="font-medium">Introduction to React</p>
                    <p className="text-sm text-muted-foreground">45 students enrolled</p>
                  </div>
                  <Award className="h-5 w-5 text-yellow-500" />
                </div>
                <div className="flex items-center justify-between p-3 rounded-md bg-muted/50">
                  <div>
                    <p className="font-medium">Advanced TypeScript</p>
                    <p className="text-sm text-muted-foreground">32 students enrolled</p>
                  </div>
                  <Award className="h-5 w-5 text-yellow-500" />
                </div>
                <div className="flex items-center justify-between p-3 rounded-md bg-muted/50">
                  <div>
                    <p className="font-medium">Web Development Basics</p>
                    <p className="text-sm text-muted-foreground">67 students enrolled</p>
                  </div>
                  <Award className="h-5 w-5 text-yellow-500" />
                </div>
              </div>
            </div>

            <div className="rounded-lg border bg-card p-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                Upcoming Events
              </h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 rounded-md bg-muted/50">
                  <div>
                    <p className="font-medium">Midterm Exam</p>
                    <p className="text-sm text-muted-foreground">March 15, 2024</p>
                  </div>
                </div>
                <div className="flex items-center justify-between p-3 rounded-md bg-muted/50">
                  <div>
                    <p className="font-medium">Project Submission</p>
                    <p className="text-sm text-muted-foreground">March 20, 2024</p>
                  </div>
                </div>
                <div className="flex items-center justify-between p-3 rounded-md bg-muted/50">
                  <div>
                    <p className="font-medium">Workshop: UI/UX Design</p>
                    <p className="text-sm text-muted-foreground">March 25, 2024</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}

export default App
