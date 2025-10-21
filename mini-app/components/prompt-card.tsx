import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "./ui/card";
import { Button } from "./ui/button";

export interface PromptCardProps {
  title: string;
  description: string;
  onGenerate?: () => void;
}

export function PromptCard({ title, description, onGenerate }: PromptCardProps) {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>{description}</CardDescription>
      </CardContent>
      {onGenerate && (
        <CardFooter>
          <Button onClick={onGenerate} variant="outline">
            Generate Prompt
          </Button>
        </CardFooter>
      )}
    </Card>
  );
}
