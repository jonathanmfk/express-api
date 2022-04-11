import { Visivility, Weather } from './enums';

export interface DiaryEntry {
	id: number;
	date: string;
	weather: Weather;
	visibility: Visivility;
	comment: string;
}

export type NonSensitiveInfoDiaryEntry = Omit<DiaryEntry, 'comment'>;

export type NewDiaryEntry = Omit<DiaryEntry, 'id'>;
