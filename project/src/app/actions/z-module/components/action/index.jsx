import { GiftIcon } from '@heroicons/react/20/solid'

const features = [
  {
    name: 'Сборка в подарок.',
    description:
      'Если ваш заказ свыше 70000 рублей, то наша компания оплатит работу сборщиков за свой счёт.',
    icon: GiftIcon,
  },
  {
    name: 'Вместе дешевле.',
    description: 'При разовом заказе кухонного гарнитура и шкафа, мы предоставим скидку 5% на оба изделия.',
    icon: GiftIcon,
  },
  {
    name: 'Каперсберг дарит.',
    description: 'Если вы приобретёте 5 позиций техники Kuppersberg, та что по меньшей цене будет вам в подарок.',
    icon: GiftIcon,
  },
]

export default function Action() {
  return (
    <div className="overflow-hidden bg-white py-12 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-red-900">Наши акции</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Специальные предложения</p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Мы стараемся Вас порадовать не только качественной и красивой мебелью, но и приятными бонусами при покупке!
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon className="absolute left-1 top-1 h-5 w-5 text-red-900" aria-hidden="true" />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <img
            src="https://art-holding.su/image/catalog/category/gifts2.jpg"
            alt="Product screenshot"
            className="w-[40rem] max-w-none  sm:w-[50rem]"
            width={2432}
            height={1442}
          />
        </div>
      </div>
    </div>
  )
}
