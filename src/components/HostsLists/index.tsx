export default function HostsList() {
    return (
        <div className="overflow-x-auto">
            <div className="pb-2">
            <span className="badge badge-outline">
                1台検出しました
            </span>
            </div>
            <table className="table">
                <thead>
                    <tr>
                        <th>ホスト名</th>
                        <th>IPアドレス</th>
                        <th>MACアドレス</th>
                        <th>OS</th>
                        <th>操作</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <div className="flex items-center gap-3">
                                <div>
                                    DESKTOP-FG7F9S
                                </div>
                            </div>
                        </td>
                        <td>192.168.0.1</td>
                        <td>AA:BB:CC:DD:EE:FF</td>
                        <td>Windows 10 Pro</td>
                        <th>
                            <button className="btn btn-xs btn-accent text-white">追加</button>
                        </th>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
