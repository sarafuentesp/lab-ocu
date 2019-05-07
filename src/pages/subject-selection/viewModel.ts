export interface Subject {
  id: string;
  name: string;
  quarter: string;
  credits: string;
  isSelected: boolean;
  group: string;
  time: string;
  teacher: string;
}

export interface Course {
  name: string;
  subjects: Subject[];
}
