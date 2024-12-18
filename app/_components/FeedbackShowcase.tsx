"use client";

import { useEffect, useState } from "react";
import { BellRing, Heart } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";

type CardProps = React.ComponentProps<typeof Card>;

type Feedback = {
  id: string;
  fullname: string;
  email: string;
  message: string;
};

const FeedbackShowcase = ({ className, ...props }: CardProps) => {
  const [feedback, setFeedback] = useState<Feedback[]>([]);

  useEffect(() => {
    fetch("/api/feedback")
      .then((res) => res.json())
      .then((data) => setFeedback(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="flex justify-center items-center flex-col w-full mt-10">
      <motion.h1
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 1.2 }}
        className="lg:text-6xl text-4xl font-bold uppercase tracking-wide text-center"
      >
        Feedbacks
      </motion.h1>
      <div
        id="thoughts"
        className="grid lg:grid-cols-3 grid-cols-1 gap-4 p-10 lg:gap-6"
      >
        {feedback.map((fdb) => (
          <Card
            key={fdb.id}
            className={cn("lg:w-[380px]", className)}
            {...props}
          >
            <CardHeader>
              <CardTitle>{fdb.fullname}</CardTitle>
              <CardDescription>{fdb.email}</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className=" flex items-center space-x-4 rounded-md border p-4">
                <BellRing />
                <div className="flex-1 space-y-1">
                  <p className="text-sm font-medium leading-none">
                    Push Notifications
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Send feedback to your device.
                  </p>
                </div>
                <Switch />
              </div>
              <div>
                <div className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0">
                  <span className="flex h-2 w-2 translate-y-1 rounded-full bg-black" />
                  <div className="space-y-1">
                    <p className="text-sm font-medium leading-none">
                      Feedback:
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {fdb.message}
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">
                Give a Like <Heart />
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default FeedbackShowcase;
