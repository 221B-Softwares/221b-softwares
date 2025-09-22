import { Project } from '@/types'

export const projects: Project[] = [
  {
    id: 'p1',
    title: 'Litsee – Interactive Storybooks',
    clientId: 'internal',
    summary:
      'Litsee is an AI-powered interactive storybook platform designed to spark imagination in children. The app combines dynamic narration, illustrations, and built-in quizzes that adapt to each reader’s journey. Parents can track engagement while kids enjoy stories that feel alive and personalized. It’s not just reading—it’s an adventure that evolves with every choice the child makes.',
    tech: ['react', 'tailwind', 'node', 'mysql', 'firebase', 'github'],
    liveUrl: 'https://www.litsee.com/',
    cover: '/projects/litsee.png',
    detectives: ['2', '1', '3', '9'],
  },
  {
    id: 'p2',
    title: 'XpertStats – Sports Analytics',
    clientId: 'internal',
    summary:
      'XpertStats is a sports analytics and tips ecosystem built for serious fans. It delivers real-time odds calculations, predictive insights, and customizable strategies using AI-powered models. Integrated with RevenueCat, it offers premium features and subscription management across platforms. Whether casual or professional, users gain a data-driven edge in the fast-moving sports market.',
    tech: [
      'react',
      'next',
      'tailwind',
      'node',
      'react-native',
      'expo',
      'android',
      'ios',
      'postgresql',
      'redis',
      'github',
    ],
    liveUrl: 'https://xpertstats.com',
    androidUrl:
      'https://play.google.com/store/apps/details?id=com.jawadzaheer.xpertbetmobileapp&hl=en&pli=1',
    iosUrl:
      'https://apps.apple.com/ca/app/xpertstats-betting-tips/id6741042887',
    cover: '/projects/xpertStats.png',
    detectives: ['2', '1', '3', '8', '9'],
  },
  {
    id: 'p3',
    title: 'MinMini – Kids Clothing Marketplace',
    clientId: 'internal',
    summary:
      'MinMini is a kids’ clothing e-commerce marketplace that empowers vendors to rent stands, showcase their collections, and manage sales. Each vendor gets a personalized dashboard to upload products, track orders, and analyze performance. Customers can explore a wide range of trendy and comfortable kidswear from multiple sellers, all in one seamless store experience. Super Admins maintain full oversight with controls for vendor management, inventory, and payments, ensuring smooth platform operations.',
    tech: ['react', 'next', 'tailwind', 'node', 'mysql', 'github'],
    liveUrl: 'https://minmini.de',
    cover: '/projects/minmini.png',
    detectives: ['3', '1', '2', '9'],
  },
  {
    id: 'p4',
    title: 'Breeze Financials',
    clientId: 'internal',
    summary:
      'BreezeFinancials provides professional bookkeeping and fractional CFO services tailored for Toronto small businesses. The platform helps entrepreneurs gain financial clarity, streamline operations, and make data-driven decisions. Transform your finances, transform your business.',
    tech: ['react', 'tailwind', 'node', 'mysql', 'github', 'aws'],
    liveUrl: 'https://breezefinancials.com/',
    cover: '/projects/breezeFinancials.png',
    detectives: ['2', '3', '1', '9'],
  },
  {
    id: 'p5',
    title: 'Deutsche GFA – Diet Plan',
    clientId: 'internal',
    summary:
      'A diet plan web application for gyms: after collecting detailed personal data (goals, current state, preferences), the app uses AI to generate customized meal plans, offers meal prep tips, recipes, and shopping lists. Helps users with fat loss, muscle gain, or maintaining healthy eating based on scientific / nutritional analysis.',
    tech: ['react', 'next', 'tailwind', 'node', 'postgresql', 'github'],
    liveUrl:
      'https://ep.deutschegfa.de/?requestor=open_api_demo&customerId=1211440283',
    cover: '/projects/deutscheGFA.png',
    detectives: ['4', '3', '1', '2', '9'],
  },
]
