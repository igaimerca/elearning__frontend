import classNames from 'classnames'

interface IAvatarProps {
    src: string
    alt: string
    className?: string
}

export default function Avatar({ avatars }: {avatars: IAvatarProps[]}) {
    return (
        <section className="-space-x-4">
            {avatars.map((avatar, index) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={avatar.src} key={index} className={`relative z-30 inline object-cover w-8 h-8 border-2 border-white rounded-full ${classNames}`} alt={avatar.alt} />
            ))}
        </section>
    )
}
