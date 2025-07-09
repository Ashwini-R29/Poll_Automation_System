// src/pages/teacher/manageroom.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Users, Clock4, BarChart3 } from "lucide-react";
import { useNavigate } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function ManageRoom() {
  const navigate = useNavigate();
  const [isDark] = useState(false);

  const rooms = [
    {
      id: "math-101",
      name: "Math Quiz Room",
      createdAt: "2024-06-15",
      pollsCount: 5,
      participants: 40,
      duration: "15 mins",
    },
    {
      id: "sci-quiz",
      name: "Science Poll Room",
      createdAt: "2024-06-10",
      pollsCount: 3,
      participants: 32,
      duration: "10 mins",
    },
    {
      id: "history-quiz",
      name: "History Trivia Room",
      createdAt: "2024-06-18",
      pollsCount: 4,
      participants: 28,
      duration: "12 mins",
    },
    {
      id: "gk-room",
      name: "General Knowledge Room",
      createdAt: "2024-06-20",
      pollsCount: 6,
      participants: 35,
      duration: "20 mins",
    },
  ];

  return (
    <div className={`${isDark ? 'dark' : ''} transition-colors duration-300`}>
      <div className="p-6 space-y-6 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 min-h-screen">
        <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-4">
          Manage Rooms
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rooms.map((room) => (
            <Card
              key={room.id}
              onClick={() => navigate({ to: `/teacher/pollanalysis/${room.id}` })}
              className="cursor-pointer bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-md hover:shadow-xl dark:shadow-xl transition-shadow"
            >
              <CardHeader>
                <CardTitle className="text-purple-700 dark:text-purple-400 flex items-center gap-2">
                  <BarChart3 className="h-5 w-5" />
                  {room.name}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-blue-500" />
                  Created: {room.createdAt}
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-emerald-500" />
                  Participants: {room.participants}
                </div>
                <div className="flex items-center gap-2">
                  <BarChart3 className="h-4 w-4 text-indigo-500" />
                  Polls: {room.pollsCount}
                </div>
                <div className="flex items-center gap-2">
                  <Clock4 className="h-4 w-4 text-orange-500" />
                  Duration: {room.duration}
                </div>
                <div className="pt-2">
                  <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold">
                    View Analysis
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
