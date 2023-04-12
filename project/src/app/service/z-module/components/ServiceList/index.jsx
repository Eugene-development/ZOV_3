import { ArrowPathIcon, CloudArrowUpIcon, LockClosedIcon } from '@heroicons/react/20/solid'

const services = [
  {
    name: 'Консультация',
    description:
      'Commodo nec sagittis tortor mauris sed. Turpis tortor quis scelerisque diam id accumsan nullam tempus. Pulvinar etiam lacus volutpat eu. Phasellus praesent ligula sit faucibus.',
    href: '#',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Замер',
    description:
      'Pellentesque enim a commodo malesuada turpis eleifend risus. Facilisis donec placerat sapien consequat tempor fermentum nibh.',
    href: '#',
    icon: LockClosedIcon,
  },
  {
    name: 'Проект',
    description:
      'Pellentesque sit elit congue ante nec amet. Dolor aenean curabitur viverra suspendisse iaculis eget. Nec mollis placerat ultricies euismod ut condimentum.',
    href: '#',
    icon: ArrowPathIcon,
  },
  {
    name: 'Доставка',
    description:
      'Commodo nec sagittis tortor mauris sed. Turpis tortor quis scelerisque diam id accumsan nullam tempus. Pulvinar etiam lacus volutpat eu. Phasellus praesent ligula sit faucibus.',
    href: '#',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Сборка',
    description:
      'Pellentesque enim a commodo malesuada turpis eleifend risus. Facilisis donec placerat sapien consequat tempor fermentum nibh.',
    href: '#',
    icon: LockClosedIcon,
  },
  {
    name: 'Обслуживание',
    description:
      'Pellentesque sit elit congue ante nec amet. Dolor aenean curabitur viverra suspendisse iaculis eget. Nec mollis placerat ultricies euismod ut condimentum.',
    href: '#',
    icon: ArrowPathIcon,
  },
]



export default function ServiceList() {
  return (
    <div className="bg-white py-8 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Наш сервис</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Ваша покупка будет комфортной
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Quis tellus eget adipiscing convallis sit sit eget aliquet quis. Suspendisse eget egestas a elementum
            pulvinar et feugiat blandit at. In mi viverra elit nunc.
          </p>
        </div>
        <div className="mx-auto mt-8 max-w-2xl sm:mt-20 lg:mt-12 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {services.map((item) => (
              <div key={item.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <item.icon className="h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  {item.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{item.description}</p>
                  <p className="mt-2">
                    {/* <a href={item.href} className="text-sm font-semibold leading-6 text-indigo-600">
                      Learn more <span aria-hidden="true">→</span>
                    </a> */}
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
