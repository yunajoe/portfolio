export type CareerType = {
  id: number;
  companyName: string;
  status: string;
  position: string;
  companyDate?: {
    startYear: string;
    startMonth: string;
    endYear: string;
    endMonth: string;
  };
};

export type EducationType = {
  id: number;
  schoolName: string;
  major: string;
  schoolDate?: {
    startYear: string;
    startMonth: string;
    endYear: string;
    endMonth: string;
  };
};
export type CareerList = {
  id: number;
  companyName: string;
  position: string;
  companyDate: CompanyDate;
};

export type CompanyDate = {
  startYear: string;
  startMonth: string;
  endYear: string;
  endMonth: string;
};

export type EducationList = {
  id: number;
  schoolName: string;
  major: string;
  schoolDate: SchoolDate;
};

export type SchoolDate = {
  startYear: string;
  startMonth: string;
  endYear: string;
  endMonth: string;
};

export type Item = {
  _id: string;
  users_table_id: string;
  portpolio_name: string;
  portpolioId: string;
  introText: string;
  careerList: CareerList[];
  educationList: EducationList[];
  createdAt: string;
  updatedAt: string;
  defaultResume: boolean;
};
