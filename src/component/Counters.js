import React from 'react'

function Counters() {
    return (
        <div className="container">
            <nav>
                <div class="nav nav-pills nav-justified" id="nav-tab" role="tablist">
                    <a
                        class="nav-item nav-link active"
                        id="nav-del-tab"
                        data-toggle="tab"
                        href="#nav-del"
                        role="tab"
                        aria-controls="nav-home"
                        aria-selected="true"
                    >
                        {"DEL"}
                    </a>
                    <a
                        class="nav-item nav-link"
                        id="nav-int-tab"
                        data-toggle="tab"
                        href="#nav-int"
                        role="tab"
                        aria-controls="nav-profile"
                        aria-selected="false"
                    >
                        {"INT"}
                    </a>
                    <a
                        class="nav-item nav-link"
                        id="nav-ood-tab"
                        data-toggle="tab"
                        href="#nav-ood"
                        role="tab"
                        aria-controls="nav-profile"
                        aria-selected="false"
                    >
                        {"OOD"}
                    </a>
                    <a
                        class="nav-item nav-link"
                        id="nav-dex-tab"
                        data-toggle="tab"
                        href="#nav-dex"
                        role="tab"
                        aria-controls="nav-profile"
                        aria-selected="false"
                    >
                        {"DEX"}
                    </a>
                    <a
                        class="nav-item nav-link"
                        id="nav-nfi-tab"
                        data-toggle="tab"
                        href="#nav-nfi"
                        role="tab"
                        aria-controls="nav-profile"
                        aria-selected="false"
                    >
                        {"NFI"}
                    </a>
                </div>
            </nav>
            <div class="tab-content" id="nav-tabContent">
                <div
                    class="tab-pane fade show active"
                    id="nav-del"
                    role="tabpanel"
                    aria-labelledby="nav-del-tab"
                >
                    sisir
                </div>
                <div
                    class="tab-pane fade "
                    id="nav-int"
                    role="tabpanel"
                    aria-labelledby="nav-int-tab"
                >
                kumar
                </div>
                <div
                    class="tab-pane fade "
                    id="nav-ood"
                    role="tabpanel"
                    aria-labelledby="nav-ood-tab"
                >
                khatai
                </div>
                <div
                    class="tab-pane fade "
                    id="nav-dex"
                    role="tabpanel"
                    aria-labelledby="nav-dex-tab"
                >
                chadanana
                </div>
                <div
                    class="tab-pane fade "
                    id="nav-nfi"
                    role="tabpanel"
                    aria-labelledby="nav-nfi-tab"
                >
                rouwt
                </div>
            </div>
        </div>
    )
}

export default Counters
