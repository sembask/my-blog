import { Card, CardContent } from "@/components/ui/card";

interface TechCardProps {
  name: string;
  level?: number;
  icon: string;
}

export function TechCard({ name, level, icon }: TechCardProps) {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-4">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-2xl">{icon}</span>
          <h3 className="font-medium">{name}</h3>
        </div>
        <div className="w-full bg-secondary rounded-full h-2.5">
          <div
            className="bg-primary h-2.5 rounded-full transition-all duration-500 ease-out"
            style={{ width: `${level}%` }}
          ></div>
        </div>
        {/* <p className="text-xs text-muted-foreground mt-2 text-right">
          {level}% proficiência
        </p> */}
      </CardContent>
    </Card>
  );
}
