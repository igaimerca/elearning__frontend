import { useState } from 'react'
import Modal from '../common/Modal'

export default function NewCourses({ isopen, onClose }: { isopen: boolean, onClose: () => void }) {
    const [step, setStep] = useState(1)

    return (
        <Modal open={isopen} onClose={onClose}>
            <section className="w-[1211px] h-[623px]">
                <h3 className="text-primary-700 text-center font-semibold text-[18px]">CREATE CLASS</h3>
                <section>
                    <div>
                        <label>Class</label>
                    </div>
                    {/* <div></div> */}
                </section>
            </section>
        </Modal>
    )
}
