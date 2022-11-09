import React, { useState } from 'react'
import AddDistrictInfo from './AddDistrictInfo'
import AddSchool from './AddSchool'
import AssignAdmin from './AssignAdmin'

type Props = {
    close: () => void;
}

function CreateDistrictModals({ close }: Props) {
    const [activeTab, setactiveTab] = useState(1)
    return (
        activeTab === 1
            ? <AddDistrictInfo next={() => { setactiveTab(2) }} cancel={close} />
            : activeTab === 2
                ? <AssignAdmin next={() => { setactiveTab(3) }} back={() => setactiveTab(1)} />
                : activeTab === 3
                    ? <AddSchool back={() => setactiveTab(2)} done={close} />
                    : null
    )
}

export default CreateDistrictModals
