import { TeamNode } from '@/types'

export const teamTree: TeamNode[] = [
  {
    id: '1',
    designation: 'ceo',
    name: 'Kashif Khan',
    title: 'Chief Executive Officer',
  },
  {
    id: '2',
    designation: 'cto',
    name: 'Huzaifah Tariq',
    title: 'Chief Technology Officer',
    photo: '/team/huzaifah.jpg',
    children: [
      {
        id: '3',
        designation: 'frontend-lead',
        name: 'Mustaqeem Tariq',
        title: 'Frontend Lead',
        children: [
          {
            id: '2',
            designation: 'frontend-dev',
            name: 'Huzaifah Tariq',
            title: 'Frontend Developer',
            photo: '/team/huzaifah.jpg',
          },
          {
            id: '4',
            designation: 'frontend-dev',
            name: 'Ali Taimoor',
            title: 'Frontend Developer',
          },
          {
            id: '5',
            designation: 'frontend-dev',
            name: 'Awais Ali',
            title: 'Frontend Developer',
          },
        ],
      },
      {
        id: '2',
        designation: 'backend-lead',
        name: 'Huzaifah Tariq',
        title: 'Backend/DB Lead',
        photo: '/team/huzaifah.jpg',
        children: [
          {
            id: '1',
            designation: 'backend-dev',
            name: 'Kashif Khan',
            title: 'Backend Developer',
          },
          {
            id: '6',
            designation: 'backend-dev',
            name: 'Areeb Ahmad',
            title: 'Backend Developer',
          },
          {
            id: '7',
            designation: 'backend-dev',
            name: 'Babar Hussain',
            title: 'Backend Developer',
          },
        ],
      },
      {
        id: '2',
        designation: 'mobile-lead',
        name: 'Huzaifah Tariq',
        title: 'Mobile Dev Lead',
        photo: '/team/huzaifah.jpg',
        children: [
          {
            id: '8',
            designation: 'mobile-dev',
            name: 'Eve',
            title: 'Mobile Developer',
          },
        ],
      },
      {
        id: '1',
        designation: 'devops-lead',
        name: 'Kashif Khan',
        title: 'DevOps Lead',
        children: [
          {
            id: '9',
            designation: 'devops',
            name: 'Haseeb Arif',
            title: 'DevOps Specialist',
          },
        ],
      },
    ],
  },
]
