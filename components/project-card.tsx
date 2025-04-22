import Link from "next/link"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

interface ProjectCardProps {
  title: string
  description: string
  icon: string
  link: string
}

export function ProjectCard({ title, description, icon, link }: ProjectCardProps) {
  return (
    <Link href={link} className="group">
      <Card className="h-full transition-colors group-hover:border-primary">
        <CardHeader className="pb-2">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">{title}</h3>
            <span className="text-2xl">{icon}</span>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">{description}</p>
        </CardContent>
      </Card>
    </Link>
  )
}
