export interface RobotProduct {
  id: string;
  name: string;
  series: string;
  payload: string;
  reach: string;
  description: string;
  imageUrl: string;
}

export interface Industry {
  id: string;
  name: string;
  iconName: string;
  description: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export enum AutomationGoal {
  WELDING = 'Arc Welding',
  PALLETIZING = 'Palletizing',
  ASSEMBLY = 'Assembly',
  MACHINING = 'Machining',
  INSPECTION = 'Inspection',
  OTHER = 'General Automation'
}