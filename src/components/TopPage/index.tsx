import HostsList from "../RemoteHostsList";
import PageLayout from "../PageLayout";

export default function TopPage() {
    return (
        <PageLayout>
            <h2 className="text-4xl font-bold py-6">ダッシュボード</h2>
            <div className="flex flex-col w-full border-opacity-50">
                <div className="pb-8">
                    遠隔操作対象ホストに対して操作を行うことができます。
                </div>
            </div>
            <details className="dropdown pb-2">
                <summary className="m-1 btn btn-sm">一括操作</summary>
                <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                    <li className="pb-2"><button className="bg-green-200">起動</button></li>
                    <li className="pb-2"><button className="bg-red-200">シャットダウン</button></li>
                </ul>
            </details>
            <HostsList />
        </PageLayout>
    );
}
