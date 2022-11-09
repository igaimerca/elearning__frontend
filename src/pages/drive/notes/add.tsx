import Modal from '~/components/molecules/common/Modal'
import Note from '~/components/organisms/teacher/Note'
import MainLayout from '~/layouts/MainLayout'

export default function NewNoteModal() {
    return (
        <MainLayout title='Notes'>
            <Modal open={true} >
                <div className='w-[900px]'>
                    <Note />
                </div>
            </Modal>
        </MainLayout>
    )
}
