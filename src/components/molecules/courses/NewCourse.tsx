import { Fragment, useState } from 'react'
import Modal from '../common/Modal'

export default function NewCourses({ isopen, onClose }: { isopen: boolean, onClose: () => void }) {
    const [step, setStep] = useState(1)

    return (
        <Modal open={isopen} onClose={onClose}>
            <section className="w-[1211px] h-[623px]">

                {step === 1 && (
                    <Fragment>
                        <h3 className="text-primary-700 text-center font-semibold text-[18px] pb-[48px]">CREATE CLASS</h3>
                        <section className="grid grid-cols-2 pb-[47px] w-full">
                            <div className="flex justify-between flex-col gap-[80px]">
                                <div className="flex flex-col">
                                    <label className="pb-[18px] text-[20px]">Class</label>
                                    <input type="text" placeholder="class name" className="w-[512px] h-[60px] border border-neutral-500 rounded-[6px] pl-[23px]" />
                                </div>

                                <div className="flex gap-5 items-center">
                                    <label>Add class Poto</label>
                                    <button className="border border-neutral-500 pl-[23px] pr-[18px] pt-[12px] pb-[9px] rounded-[6px] text-textColor">Upload Jpeg</button>
                                    <p className="text-neutral-600">(optional)</p>
                                </div>
                                <div className="flex items-center gap-4">
                                    <label className="text-neutral-850 font-medium">Set Expiration Date:</label>
                                    <div className="flex gap-2">
                                        <select className="border py-2 px-1 rounded-[8px]">
                                            <option>dd</option>
                                            <option>1</option>
                                            <option>2</option>
                                        </select>

                                        <select className="border py-2 px-1 rounded-[8px]">
                                            <option>Mn</option>
                                            <option>1 </option>
                                            <option>2 </option>
                                        </select>

                                        <select className="border py-2 px-1 rounded-[8px]">
                                            <option>Yr</option>
                                            <option>1</option>
                                            <option>2 </option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col">
                                <label className="pb-[18px] text-[20px]">Class description <span className="text-neutral-500 text-[20px]">(max 30 words)</span></label>
                                <textarea rows={5} placeholder="Add class description" className="border border-neutral-500 pl-[16px] pt-[18px] rounded-[6px] w-[511px]" />
                            </div>
                        </section>
                    </Fragment>
                )}

                {step === 2 && (
                    <Fragment>
                        <p>Hh</p>
                    </Fragment>
                )}

                <hr />

                <div className="flex justify-between pt-[48px]">
                    <p className="text-[18px]">Step {step} of 2 </p>
                    <div className="flex gap-[40px]">
                        <button className="text-neutral-700 text-[20px]" onClick={onClose}>Cancel</button>
                        <button className="bg-primary-700 rounded-[16px] py-[16px] px-[28px] text-[20px] text-white" onClick={() => setStep(prev => prev + 1)}>Next</button>
                    </div>
                </div>
            </section>
        </Modal>
    )
}
