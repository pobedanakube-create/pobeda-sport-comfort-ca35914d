import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CalendarIcon, Clock, User, Phone } from "lucide-react";
import { format } from "date-fns";
import { ru } from "date-fns/locale";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

const formSchema = z.object({
  name: z.string().min(2, "Имя должно содержать минимум 2 символа"),
  phone: z.string().min(10, "Введите корректный номер телефона"),
  preferredDate: z.date({
    required_error: "Выберите предпочтительную дату",
  }),
  preferredTime: z.string().min(1, "Выберите время тренировки"),
});

type FormData = z.infer<typeof formSchema>;

const BookingForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      preferredTime: "",
    },
  });

  const timeSlots = [
    "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", 
    "15:00", "16:00", "17:00", "18:00", "19:00", "20:00"
  ];

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Заявка успешно отправлена!",
      description: `Спасибо, ${data.name}! Мы свяжемся с вами в ближайшее время для подтверждения записи на ${format(data.preferredDate, "d MMMM", { locale: ru })} в ${data.preferredTime}.`,
      duration: 5000,
    });
    
    form.reset();
    setIsSubmitting(false);
  };

  return (
    <section id="booking" className="py-16 px-6 bg-gradient-to-b from-secondary/5 to-background">
      <div className="container mx-auto max-w-2xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-fitness-primary mb-4">{/* Responsive heading */}
            Записаться на тренировку
          </h2>
          <p className="text-lg text-muted-foreground">
            Оставьте заявку, и мы поможем вам начать путь к здоровому образу жизни
          </p>
        </div>

        <Card className="shadow-elegant border-border/50 bg-card/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-center text-2xl text-fitness-primary">
              Форма записи
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground font-medium">Имя</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                          <Input 
                            placeholder="Ваше имя" 
                            className="pl-10 h-12 border-border/50 focus:border-fitness-accent focus:ring-fitness-accent/20" 
                            {...field} 
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground font-medium">Телефон</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                          <Input 
                            placeholder="+7 (999) 123-45-67" 
                            className="pl-10 h-12 border-border/50 focus:border-fitness-accent focus:ring-fitness-accent/20" 
                            {...field} 
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="preferredDate"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground font-medium">Предпочтительная дата</FormLabel>
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant="outline"
                              className={cn(
                                "w-full h-12 pl-10 justify-start text-left font-normal border-border/50 hover:border-fitness-accent",
                                !field.value && "text-muted-foreground"
                              )}
                            >
                              <CalendarIcon className="absolute left-3 h-4 w-4" />
                              {field.value ? (
                                format(field.value, "d MMMM yyyy", { locale: ru })
                              ) : (
                                <span>Выберите дату</span>
                              )}
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={field.value}
                            onSelect={field.onChange}
                            disabled={(date) => date < new Date()}
                            initialFocus
                            className={cn("p-3 pointer-events-auto")}
                          />
                        </PopoverContent>
                      </Popover>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="preferredTime"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground font-medium">Предпочтительное время</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <div className="relative">
                            <Clock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground z-10" />
                            <SelectTrigger className="pl-10 h-12 border-border/50 focus:border-fitness-accent focus:ring-fitness-accent/20">
                              <SelectValue placeholder="Выберите время" />
                            </SelectTrigger>
                          </div>
                        </FormControl>
                        <SelectContent>
                          {timeSlots.map((time) => (
                            <SelectItem key={time} value={time}>
                              {time}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full h-14 text-lg font-semibold bg-fitness-accent hover:bg-fitness-accent/90 text-fitness-secondary shadow-lg hover:shadow-xl transform hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
                >
                  {isSubmitting ? "Отправка..." : "Записаться на тренировку"}
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default BookingForm;