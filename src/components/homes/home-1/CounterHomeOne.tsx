export default function CounterHomeOne() {
  return (
    <div className="tv-counter-area pb-130 pt-100 dark-bg" style={{ background: 'linear-gradient(135deg, #1a1a2e 0%, #2d2d4e 100%)' }}>
      <div className="container">
        <div className="row justify-content-center align-items-center">
          {/* Projects */}
          <div
            className="col-lg-3 col-xl-3 col-md-6 wow itfadeUp"
            data-wow-duration=".9s"
            data-wow-delay=".3s"
          >
            <div className="single-couter-wrap d-flex align-items-center justify-content-center" style={{ padding: '30px', textAlign: 'center' }}>
              <div className="inner">
                <h5 style={{ color: '#fff', fontSize: '56px', fontWeight: 800, marginBottom: '10px' }}>
                  <span
                    className="purecounter"
                    data-purecounter-duration="2"
                    data-purecounter-end="150"
                  >
                    150
                  </span>
                  +
                </h5>
                <h6 style={{ color: 'rgba(255,255,255,0.7)', fontSize: '18px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px' }}>Projects Completed</h6>
              </div>
            </div>
          </div>

          {/* Satisfaction */}
          <div
            className="col-lg-3 col-xl-3 col-md-6 wow itfadeUp"
            data-wow-duration=".9s"
            data-wow-delay=".5s"
          >
            <div className="single-couter-wrap d-flex align-items-center justify-content-center" style={{ padding: '30px', textAlign: 'center' }}>
              <div className="inner">
                <h5 style={{ color: '#2B4DFF', fontSize: '56px', fontWeight: 800, marginBottom: '10px' }}>
                  <span
                    className="purecounter"
                    data-purecounter-duration="2"
                    data-purecounter-end="98"
                  >
                    98
                  </span>
                  %
                </h5>
                <h6 style={{ color: 'rgba(255,255,255,0.7)', fontSize: '18px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px' }}>Success Rate</h6>
              </div>
            </div>
          </div>

          {/* Clients */}
          <div
            className="col-lg-3 col-xl-3 col-md-6 wow itfadeUp"
            data-wow-duration=".9s"
            data-wow-delay=".7s"
          >
            <div className="single-couter-wrap d-flex align-items-center justify-content-center" style={{ padding: '30px', textAlign: 'center' }}>
              <div className="inner">
                <h5 style={{ color: '#fff', fontSize: '56px', fontWeight: 800, marginBottom: '10px' }}>
                  <span
                    className="purecounter"
                    data-purecounter-duration="2"
                    data-purecounter-end="80"
                  >
                    80
                  </span>
                  +
                </h5>
                <h6 style={{ color: 'rgba(255,255,255,0.7)', fontSize: '18px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px' }}>Global Clients</h6>
              </div>
            </div>
          </div>

          {/* Years */}
          <div
            className="col-lg-3 col-xl-3 col-md-6 wow itfadeUp"
            data-wow-duration=".9s"
            data-wow-delay=".9s"
          >
            <div className="single-couter-wrap d-flex align-items-center justify-content-center" style={{ padding: '30px', textAlign: 'center' }}>
              <div className="inner">
                <h5 style={{ color: '#2B4DFF', fontSize: '56px', fontWeight: 800, marginBottom: '10px' }}>
                  <span
                    className="purecounter"
                    data-purecounter-duration="2"
                    data-purecounter-end="8"
                  >
                    8
                  </span>
                  +
                </h5>
                <h6 style={{ color: 'rgba(255,255,255,0.7)', fontSize: '18px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px' }}>Experience Years</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
