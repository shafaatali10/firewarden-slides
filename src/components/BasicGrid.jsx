export default function BasicGrid(){
    return (
        <div className="container-fluid min-vh-100 d-flex flex-column p-0">
            {/* Top row */}
            <div className="row g-0 flex-grow-1">
                {/* Left sidebar */}
                <div className="col-12 col-md-2 bg-light border p-3">
                    <strong>LEFT</strong>
                    <div>Top / Left panel</div>
                </div>

                {/* Main center area */}
                <div className="col-12 col-md-8 d-flex flex-column">
                    {/* Header */}
                    <div className="row g-0">
                        <div className="col bg-primary text-white p-3 border">
                            <strong>TOP CENTER</strong>
                        </div>
                    </div>

                    {/* Middle content */}
                    <div className="row g-0 flex-grow-1">
                        <div className="col-12 col-lg-6 bg-white border p-3">
                            <strong>MIDDLE LEFT</strong>
                        </div>
                        <div className="col-12 col-lg-6 bg-white border p-3">
                            <strong>MIDDLE RIGHT</strong>
                        </div>
                    </div>

                    {/* Footer */}
                    <div className="row g-0">
                        <div className="col bg-secondary text-white p-3 border">
                            <strong>BOTTOM CENTER</strong>
                        </div>
                    </div>
                </div>

                {/* Right sidebar */}
                <div className="col-12 col-md-2 bg-light border p-3">
                    <strong>RIGHT</strong>
                    <div>Top / Right panel</div>
                </div>
            </div>
        </div>
    );
}