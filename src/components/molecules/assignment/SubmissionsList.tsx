import React from 'react'
import SubmissionCard from './SubmissionCard'
import Icon from '~/components/atoms/Icon'

const SubmissionsList = () => {
    const [active, setActive] = React.useState(-1)
    const submissions = [
        { id: 1, name: 'Jane Cooper', score: 5, worth: 10, picture: 'https://s3-alpha-sig.figma.com/img/67af/3359/d4ce72b70835935e1081350520092b72?Expires=1656288000&Signature=Ob40ZRTlT0Y1woT8o5HJcKbGO~E48GHAOVECHDmv5YmE2Wt-wQ-i8f8J1kOO7GBrwrHK118~IPvxseZvfoGklgFddteyHfB0L7PbN8HE69vbWST-o88LmSfw4ig7XWgLj1-zMReTrv37PHjHRQ8lAbPtBkXtM0QXlgYKPDcUaPUoHXjNOw~7SSvJiBG9lDOOK0CWurWLFuvqPJ0kp7mXUyKIeirRPrnE0yD6lUBWApYnfvDyd7CaMpFaS4JwXRYDCvv0owdn-37xORuvBqmxc2VOCYMYTmIWgcdSqHmXByi72JpaX7QWN717wAse4~rX9~UI6yy5XYDWib3q65bPEg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA' },
        { id: 2, name: 'Esther Howard', score: 5, worth: 10, picture: 'https://s3-alpha-sig.figma.com/img/3647/f815/cf18c986de37079cb096769a235ed385?Expires=1656288000&Signature=YLWKqAf030FJ8WzTjAhcHWoJPfjgcJ2Qk9i5W0D5m57jNBwvPD~w-9A60nlurNIGUyhJMqJiD5d~8dgTNvQCSar1sVRhQ3Gz7cGK1mfMuIWz4dmTtIgaxq79crYeVU0JVGGu7kLfaVQZVRaaHqJ87F~r36Mu~0OdEJ0DYOUi2GYVb8BdlnVQLe~qy283lUqj-ml~oVFM445PhJlfYO6cGs97fEKiFU3N73U9MRseDHcpDaep1oKanCScniMre2EDcsBfjWrXfh8oC9E~apFpkl4Tfqnl0XPHEzTpTKaqJtik10FaHbLoK2OBKPFMYCVneMqA7XJsy4J4qJiiTmKEkg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA' },
        { id: 3, name: 'Jacob Jones', score: 5, worth: 10, picture: 'https://s3-alpha-sig.figma.com/img/f5e4/73b1/49841dc2ecfc271629ee6b9acb15e66b?Expires=1656288000&Signature=EGKL1TRVYOn39N6hMhoMUhwT2ZdJuyPlQtuHIf1q-C8abVGx6Edeeay-JZjEr3JZw7B9LosoKk2KPe7WZE~~f-x8MmB6fVhCMRbEhaqK7fA0H-BznnWCtRPWQtoD84f28QwHdI1Siisi-YyVwALXVkayfxhOeUvzU0yItS0FItt6oHDaAYyISb6iQjgPH7d4~RJsnR7AElWDGC66Nln9W6UdSb9Nr1XxQp0rU7cC9N~Co4a43oJhFaQi9wab8B5PVOBT~ILh8SDjO-KNGwWlrPCcXkAdMp9PSDX6Iq80GJfneECVjV2gw1kFw7Y63Ca8qj1oMCiiUZwyfb2P0Z91IA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA' },
        { id: 4, name: 'Theresa Webb', score: 5, worth: 10, picture: 'https://s3-alpha-sig.figma.com/img/016c/b0cc/da8aca8b05ba0e291d24181341ed7cca?Expires=1656288000&Signature=hKE9p2kl-ohn3lALW8po4aUn-z7H8265H9BeBhz2wqGqJdwzWMOo9LBMP73jTbcQIeSAWAcuoY798IW3cWv1Z4sILMmdJnFMPI5HHEHBbBLW~8Y3Hz-U-vAQUBW~b89WSS~4LyX8JLlojw7eyR2ycwpn1s75SNcKrzTFq3e3tmVKJ67YPOGckzeXkQLJx0Ty9BMQ1viG6UZ01PhP9-hrwE4dlUTtKbfY~-KpzrP7Rz-Rfza1dR-0x~nxWhd6U4lzFX7sVZ39mvsc2jEyGq~xSqj6FLEDniQAM0ysh3bRCL-hpRbySixfaM06gmwAE9AouOSzhHcw0wi7XhozqzGlyA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA' },
        { id: 5, name: 'Theresa Webb', score: 5, worth: 10, picture: 'https://s3-alpha-sig.figma.com/img/016c/b0cc/da8aca8b05ba0e291d24181341ed7cca?Expires=1656288000&Signature=hKE9p2kl-ohn3lALW8po4aUn-z7H8265H9BeBhz2wqGqJdwzWMOo9LBMP73jTbcQIeSAWAcuoY798IW3cWv1Z4sILMmdJnFMPI5HHEHBbBLW~8Y3Hz-U-vAQUBW~b89WSS~4LyX8JLlojw7eyR2ycwpn1s75SNcKrzTFq3e3tmVKJ67YPOGckzeXkQLJx0Ty9BMQ1viG6UZ01PhP9-hrwE4dlUTtKbfY~-KpzrP7Rz-Rfza1dR-0x~nxWhd6U4lzFX7sVZ39mvsc2jEyGq~xSqj6FLEDniQAM0ysh3bRCL-hpRbySixfaM06gmwAE9AouOSzhHcw0wi7XhozqzGlyA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA' }
    ]
    return (
        <div className='w-full'>
            <div className='flex justify-between items-center mb-[40px]'>
                <h1 className='text-textColor font-medium text-xl '>Submission</h1>
                <div className="flex gap-[8px] items-center">
                    <Icon name="account-management" size={30} />
                    <p className='text-neutral-600 font-medium '>+25 Students</p>
                </div>
            </div>

            <div className='space-y-[20px]'>
                {submissions.map(submission => (
                    <SubmissionCard
                        hideClicked={(_id:number) => { setActive(-1) }}
                        openClicked={(id:number) => { setActive(id) }}
                        isExpanded={active === submission.id} key={submission.id} {...submission} />
                ))}
            </div>
        </div>
    )
}

export default SubmissionsList
