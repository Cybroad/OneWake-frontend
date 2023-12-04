import PageLayout from "../PageLayout";
import HostsList from "../HostsLists";
import { useCallback, useRef } from "react";

export default function AddHostPage() {
    const ref = useRef<HTMLDialogElement>(null);
    const handleShow = useCallback(() => {
        ref.current?.showModal();
    }, [ref]);

    return (
        <PageLayout>
            <h2 className="text-4xl font-bold py-6">遠隔ホスト登録</h2>
            <div className="flex flex-col w-full border-opacity-50">
                <div className="pb-8">
                    <div className="grid grid-cols-12 flex items-center">
                        <div className="col-span-10">
                            ネットワーク内のホストを自動検出して表から選択するか、IPアドレス・MACアドレスを指定して手動で追加することができます。
                        </div>
                        <div className="col-span-2 text-center">
                            <button className="btn btn-primary text-white" onClick={handleShow}>手動で追加</button>
                            {/*モーダルメニューから入力フォームを作成*/}
                        </div>
                    </div>
                </div>
            </div>

            <HostsList />


            <dialog className="modal" ref={ref}>
                <div className="modal-box">
                    <h3 className="font-bold text-lg">追加フォーム</h3>
                    <p className="py-4">Press ESC key or click the button below to close</p>
                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </PageLayout>
    )
}
