import Timeline from '../components/Timeline';

type TimelineItem = {
  key: number;
  tanggal: string;
  agenda: string;
  color?: string;
};

const timeLineData: TimelineItem[] = [
  {
    key: 1,
    tanggal: '9 November 2024',
    agenda: 'Sosialisasi Pimtek FT-UH 2024',
    color: '#5E9794',
  },
  {
    key: 2,
    tanggal: '9 November 2024',
    agenda: 'Sosialisasi Pimtek FT-UH 2024',
    color: '#FCCC12',
  },
  {
    key: 3,
    tanggal: '9 November 2024',
    agenda: 'Sosialisasi Pimtek FT-UH 2024',
    color: '#CC3331',
  },
  {
    key: 4,
    tanggal: '9 November 2024',
    agenda: 'Sosialisasi Pimtek FT-UH 2024',
    color: '#283C55',
  },
  {
    key: 5,
    tanggal: '9 November 2024',
    agenda: 'Sosialisasi Pimtek FT-UH 2024',
    color: '#EE9035',
  },
];

export default timeLineData;
