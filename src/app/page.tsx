import BarChart from '@/components/BarChart';
import Card, { CardContent, CardProps } from '@/components/Card';
import PageTitle from '@/components/PageTitle';
import SalesCard, { SalesCardProps } from '@/components/SalesCard';
import { Activity, CreditCard, DollarSign, Users } from 'lucide-react';

export default function Home() {
  const cardData: CardProps[] = [
    {
      label: 'Total Revenue',
      amount: '$45,231.89',
      desc: '+20.1% from last month',
      icon: DollarSign,
    },
    {
      label: 'Subscriptions',
      amount: '+2350',
      desc: '+180.1% from last month',
      icon: Users,
    },
    {
      label: 'Sales',
      amount: '+12,234',
      desc: '+19% from last month',
      icon: CreditCard,
    },
    {
      label: 'Active Now',
      amount: '+573',
      desc: '+201 since last hour',
      icon: Activity,
    },
  ];

  const salesCardData: SalesCardProps[] = [
    {
      name: 'Olivia Martin',
      email: 'olivia.martin@email.com',
      saleAmount: '+$1,999.00',
    },
    {
      name: 'Jackson Lee',
      email: 'isabella.nguyen@email.com',
      saleAmount: '+$1,999.00',
    },
    {
      name: 'Isabella Nguyen',
      email: 'isabella.nguyen@email.com',
      saleAmount: '+$39.00',
    },
    {
      name: 'William Kim',
      email: 'will@email.com',
      saleAmount: '+$299.00',
    },
    {
      name: 'Sofia Davis',
      email: 'sofia.davis@email.com',
      saleAmount: '+$39.00',
    },
  ];
  return (
    <div className=' flex flex-col gap-5 w-full'>
      <PageTitle title='Dashboard' />
      <section className=' grid w-full grid-cols-1 gap-4 gap-x-8 transition-all sm:grid-cols-2 xl:grid-cols-4'>
        {cardData.map((data, index) => (
          <Card
            key={index}
            label={data.label}
            amount={data.amount}
            desc={data.desc}
            icon={data.icon}
          />
        ))}
      </section>
      <section className=' grid grid-cols-1 lg:grid-cols-2 gap-4 transition-all'>
        <CardContent>
          <p className=' p-4 font-semibold'>Overview</p>
          <BarChart />
        </CardContent>
        <CardContent>
          <section>
            <p>Recent Sales</p>
            <p className=' text-sm text-gray-400'>
              You made 265 sales this month
            </p>
          </section>
          {salesCardData.map((data, index) => (
            <SalesCard key={index} {...data} />
          ))}
        </CardContent>
      </section>
    </div>
  );
}
