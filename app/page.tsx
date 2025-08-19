import { Calendar, Clock, User, Users, Shield } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Event } from "@/model/Event";
import { events } from "@/data/events";

function EventCard({ event }: { event: Event }) {
  return (
    <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-l-4 border-l-primary">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="text-4xl font-bold text-primary">{event.date}</div>
            <div>
              <div className="text-lg font-semibold text-foreground">
                {event.day}
              </div>
              <div className="flex items-center gap-1 text-muted-foreground">
                <Clock className="w-4 h-4" />
                <span className="text-sm font-medium">{event.time}</span>
              </div>
            </div>
          </div>
          <Calendar className="w-6 h-6 text-primary" />
        </div>
      </CardHeader>

      <CardContent className="space-y-3">
        <h3 className="text-xl font-bold text-foreground leading-tight">
          {event.title}
        </h3>

        <div className="space-y-2">
          <div className="flex items-start gap-2">
            <Users className="w-4 h-4 text-muted-foreground mt-0.5 flex-shrink-0" />
            <div>
              <span className="text-sm font-medium text-muted-foreground">
                Direção:
              </span>
              <p className="text-sm text-foreground font-medium">
                {event.direction}
              </p>
            </div>
          </div>

          {event.speaker && (
            <div className="flex items-start gap-2">
              <User className="w-4 h-4 text-muted-foreground mt-0.5 flex-shrink-0" />
              <div>
                <span className="text-sm font-medium text-muted-foreground">
                  Preletor:
                </span>
                <p className="text-sm text-foreground font-medium">
                  {event.speaker}
                </p>
              </div>
            </div>
          )}

          {event.doorkeeper && (
            <div className="flex items-start gap-2">
              <Shield className="w-4 h-4 text-muted-foreground mt-0.5 flex-shrink-0" />
              <div>
                <span className="text-sm font-medium text-muted-foreground">
                  Portaria:
                </span>
                <p className="text-sm text-foreground font-medium">
                  {event.doorkeeper}
                </p>
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

export default function AgendaSemanal() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header fixo */}
      <header className="sticky top-0 z-10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl md:text-4xl font-bold text-center text-foreground flex flex-col">
            Agenda da Semana
          </h1>
        </div>
      </header>

      {/* Conteúdo principal */}
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1  lg:grid-cols-2 gap-6 max-w-[1200px] m-auto">
          {events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-muted/50 border-t mt-16">
        <div className="container mx-auto px-4 py-6">
          <p className="text-center text-muted-foreground text-sm md:text-base">
            <span className="font-semibold">
              AD Templo Central – Cong. Tatumundé
            </span>
            <br className="md:hidden" />
            <span className="hidden md:inline"> – </span>
            Rua da Serenidade, 43 - Siqueira
          </p>
        </div>
      </footer>
    </div>
  );
}
