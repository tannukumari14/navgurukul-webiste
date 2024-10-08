import "./Content.css";
import Link from "next/link";
import Campuses from "./Campus.js"
import KeyFacilties from "./KeyFacilties"

const Content = () => {
  return (
    <>
      <div className="bca-header">
        <img
          className="image-1"
          src="https://www.navgurukul.org/static/media/Eternal_university-removebg-preview%201.a42b9881.svg"
        />
        <img
          className="image-2"
          src="https://www.navgurukul.org/static/media/Sri%20badrika%20asharam.d13afbd1.svg"
        />
        <h2>
          Eternal University’s Fully-Funded BCA Program for Aspiring
          <br /> Young Women 2024-27
        </h2>
        <button className="apply-button">Apply by 11th September 2024</button>
      </div>

      {/* Text for NavGurukul */}
      <div className="content">
        <h1 className="title">
          The <span className="highlight">Gurukul</span> for the{" "}
          <span className="bg-highlight">New Age India</span> and
          <br className="hidden sm:inline" /> its New Generation
        </h1>
        <h4 className="description">
          We are a non-profit dedicated to bringing affordable tech education to
          underprivileged girls in India.
        </h4>
      </div>

      {/* Video of YouTube */}
      <div className="video-container">
        <iframe
          className="video"
          width="100%"
          height="auto"
          src="https://www.youtube.com/embed/NC2ymm6Sots"
          title="YouTube video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      {/* Stats Section */}
      <div className="percentage">
        <h1>890+</h1>
        <h1>₹2.8 LPA</h1>
        <h1>95%</h1>
        <h1>₹23+ Crore</h1>

        <h3>students placed across various industries in tech</h3>
        <h3>avg. salary secured by students, the highest being 8 LPA</h3>
        <h3>
          of our student strength consists of girls from marginalized
          communities
        </h3>
        <h3>collectively earned annually by our Alumni</h3>
      </div>

      {/* Councils Section */}
      <div className="councils">
        <Link href="/Councils" passHref>
          <button>Councils</button>
        </Link>
        <Link href="/CouncilsGallery" passHref>
          <button className="Councils-gallery">Councils Gallery</button>
        </Link>
      </div>

      {/* Our School Section */}
      <div className="schools">
        <h1>Our School</h1>
        <div className="school">
          <div className="school-item">
            <img
              className="img"
              src="https://www.navgurukul.org/static/media/image1.8b36aac1.svg"
              alt="School of Programming"
            />
            <h2>School of Programming</h2>
            <h3>
              Fully-funded course in software engineering with guaranteed jobs
            </h3>
          </div>

          <div className="school-item">
            <img
              className="img"
              src="https://www.navgurukul.org/static/media/image2.3a67883f.svg"
              alt="School of Design"
            />
            <h2>School of Design</h2>
            <h3>
              Fully-funded course in graphic design with guaranteed jobs
            </h3>
          </div>

          <div className="school-item">
            <img
              className="img"
              src="https://www.navgurukul.org/static/media/image3.96c9a224.jpg"
              alt="School of Business"
            />
            <h2>School of Business</h2>
            <h3>
              Fully funded course in Business CRM with guaranteed jobs
            </h3>
          </div>

          <div className="school-item">
            <img
              className="img"
              src="https://www.navgurukul.org/static/media/image4.645f45d1.png"
              alt="School of Finance"
            />
            <h2>School of Finance</h2>
            <h3>Fully funded course in Finance with guaranteed jobs</h3>
          </div>
        </div>
      </div>


{/* socail intivate */}
      <div className="social-sites">
        <h1>Digital Initiative</h1>
          <div className="social">
            <div className="social-items">
              <img  src="data:image/png;base64,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"></img>
              <h3>Zuvy</h3>
              <h4>Get started on tech education with <br></br>affordable degree programs</h4>
              <Link className="link-button"  href="https://zuvy.org/">Visit Website</Link>
            </div>

            <div className="social-items">
                <img   src="data:image/png;base64,iVBORw0
                KGgoAAAANSUhEUgAAAHkAAAAwCAYAAAA1rdXtAAAACXBIWXMAAAsTAAALEwEAmpwYA
                AAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAABh8SURBVHgB7Vx3XFRX9j+vT
                J+hV+kgigqCC3YELIktxsTEdZP9+Ul2TdvdqDGJm7Ixmk1iTDb5xZK2ppiYZ
                kzZTWKLRkUFFBURFEUQEaQNMMAM02fee79zH8wICAL+DMkffP083323nFvOvfece8
                4dKOgDLi4eHWCj6SWCAA8CUEEUBScZgV89fGtBJgUgdMxbunSozKlX/4Gj4O+YFoN
                lzmH0Bpa1fBf30YVWGMSAg+4tw67ZQ2U2mporAPUURVFRyGAFRk/hgP740uLksK757
                QZNKk9R71BAjcQJIcMyY4CiVnGcctyaNb3XN4ibj14HPcrfRy0I1ERclZ6dEigItQC
                X2jW/QAnz8KXonBWiKUGIv+9ypBQGMeDolcmcxCjghuzsNpGi7NdECeCA7mtyODWs
                AIMYcPTK5IayAINAC5kY1HVOES6awHKwa34OuG2CIJi75C3iBSgYuumiHQYx4OiVy
                VMzM508L+wE4Fcio4p55KNVQet4cM4Zv7VY1zV/QtSZfJ7lFtpkFNHI7CAIWTQtPG
                mVMce7KmmDGBhQ0E/sfmnCc8iqlRYzH73gleO67vLseWn8fFTUPhQE/oE5q47/Fwb
                xq4KFfsIucX7NOtkHwIv+4zOHp//MCpSM5ykGJLgtcALnpASb87BpITBwsdqH2wuD
                +NXR55W8+thsD95sjeVpdmRsiWWV0szLC5IUDqTgj8clJYg6l2BiOKgfm2sKqIiUF
                GpDpO85nPx5mVVe+sKc3QYYxK+CXpm8dNdsmZfSPo4TYC5NU+kYNVpu5pQji6xQmK
                QAp6SzWNfoOYgst0FRggJ4hjKjMaQQaOEAcNRug0VyYtOc3TYYxIDiukxekzPTx2F
                3PooGjTuQWSPRECJzpUWW2UDvxUCzb+cdP6zCBiYVA01+bMdaLMBDMb6/ZyXMpjWT
                fmqCQQwYemTyMwcz4hiGfROVrInQ1RCCkNp4fAQwejCd4r2anWDAOFzF3ZE1oHp9l
                GK45S+lHrwAgxgQdMuJVUemJvM8vRVlbRxc55iFQhgtXL3HdQGexIRitIwtXpt24B
                TcILRG7Uxs/UN4JvfC9yWGYvb7K/239VauzlQ3H/s1EydvLJYz4y71eYAyYDv8xtD
                ev9sxGIXjVd2X/mHf/oH9WoZ9CmiP+okGelNnduC5Z9XhGUlI9CNkVyLcwBGrj0De
                CIWCQN+/NmNfAVD9Oz+TziCjXuomKQcZNgM7aemunNak/RZfC65pDAibglRBy+A3A
                mTwZzgmf+wmqQCZNttf5V/bMbJOqAugTNRhLDO8O3odVyn1dGYG8Rr9E3mdAL8cg8
                W6EPE0w7/4XM606P4URAbf3gODCSbVm+s39FDuWeiGwWJjgFqKE+AR+A2gzlz3WA8
                MJkjkgX+7ayRlpt7uicEEbiY/fSTVi6HZJZh5KnKXgV8eDO7rU8HBLFmTn+HV10LI
                kL+7whUtl0vezX3r0MWm0uIOWR7UmrUTO5bBlRGIr+fc3611lZtPvJuZX5N32hWHq
                /kZ+C1AgMdcwfPac2feOrbh0KHLh453yHFne39E1Bvrg/B1t+v76NtLyyqWz3HmP3
                dni67+kpbEiUxeuH0hI+WkE9BTtBA/VTBwUKFsXug0SCZtxzb0scxkV+DVw+uMx64
                cS39x/wvhFfqKS+4cArzWsQDWQbZ30TNmdVhNT+9dyWRXZGdsyFkf4sqD6eEGweAH
                vyII87AdEa7v146s8zhRdSL9oxPvp7RaW1tc8TRDj3AXYlC3aIdd32CKOlcao3Lwb
                FiTxevcd28aSbx4zhkaZPThgb4Tt+po1x5NoxErTDMSglWxoJH64CDQYHK0gNZ8CS
                pbi8DOWa7bYCmjgHBNPASqokAl8UIhzEOrvQlqTCVQ3VoMnOB2bMXgKrrrXIj+JIb
                roR9wOG1qMUCBcn3WG7o35250bf2pOGC3BqoD9+rMulCn4HRvxR/kbc7lBWEaCWO9
                /h3p2Ww2H3w16my6kZyTuwfTw/E7CPWHJux+BSMw36A8PNmxTIOlIR0NfWNogTYwL
                JPLS/lKzsqNpzk6maTzDJ8XpAj6mYTrrfVD8Sg5G+nNwUfe3nYT/n9MQkk+Jp/Oq+
                OCWQWP9jy00d5q1Mg14o4n8IJSpOWEu3mej6XaJavUw09lZYFXO9oWryRyWDuTUQD
                T2Y4YpIhaZ1tub1kwTBiyAJoa7ZB/ugjqms8AEgM/Tx8YFRkHt4ZNgVztd9jBCugO
                AYpIGBd0J1RUN0BO0QVoNOAYUTQE+fhDYsxEpJEGR2u+gxZbHamQKOTz0Hv1Abalo
                b9KmAtNlqaxxY3F5+L84ka2R/0Ln70OwfFPHAQJiWi1tTYfrzo+vidlg3fy43FyvO
                V0Om/pGI/6g+haQXn4FKYfwagXcTU5cEzW45NIiY1Gf6wTGeQUdwWye7SV5SmoM9Y
                1I41mgROiO9G8irnI3BeJAkh1UIUIze7aygv8ExRHTRMHr2MOpOmz6oNmbeY3Zjoy
                lpuQMpcoz8Au3T1bSivtswWaEme1nyIcUoPvhR3Zh+Dw2SNgtpnBwbW5iFmahSNF2
                ZAYORr+dvsy2F/1PlQbizs1IEQdB9NDH4K3f3wfCsoLwGKzgJNvm50SRgIHCw7DlF
                GpMC/1fsiq/QIaLZWkmX7oo5yFbTm1CW7cIrYh+w3nu/Pfb+8wjEaGEPn9J1f620c
                3nsa6pvZIgIKt0BsomIL/7+U53oBhD+gDkKHe+PLunTS1tFNED1xGetN6ouHhF+rr
                cfdjvh3jWIWHQSrwCnJupBSsBsYG3gHfHtwH+wv3kxkjzhTyj4QJsx1mBxw5lwX1+
                gZYs/hp+G/ZOmh1tDmjNFJfmBa6BJ7/9GUorS7BLYJyzzTcnsDutIvP7pN7
                wO5wwG3pd0Bm1RawOFspPDzPwra8jllvmMlmh2V0dsWRvMkRU5LbR+1VV1qjua
                H2XMO51C4rqEcYbAYdKmYXS5ouWIJVIey4sPERAaqAq9ed2hlM+PBlwReZEoZlF8
                YvEm/K1Ju1V/Zc2FNqsBro+5P/NEItVYuKEm7rUFx/Pu9U7SmT3tossLRE5qv0VU6PviXCR
                +lzjcFJ3ONcXKavbfdFXWnJ3ot76haPuX+kRqoR9QmTw6T9OG9LcWJwoio1YkoKiWPBIPFEV
                WsMYUa05+/gXGklHC89DsOGDINVi1ZDiG8I7C/4GTb/9G+obb56PCupKYHvc3ZDUsJMyKpuO
                6OP8Z8J/8naCaWYljoyFR6f/ySo5CrYnv0VfJ21HfRmvZiPrOwTpSdgaGgERAdgnbrDJDoJHB
                LS0b5f9mvf2nECObD9xFmi3HJqiwcy+ZqsG7LfLEUGB2MJG9rgG1Euh3RHEieh4YUDz+dXGao
                Iw8a74r8++xX4KHyOrZ7+z1AvuVeoK/6H4u93/1S6ezYJh3tHHjtRebzlRHUu2e7FCUFRwv6/
                TVgWuK3wy6w9JbtG4KRI7lrnjuIfLLfF3b4fJ8l06AFCFxMTiqbzaw++OAT7NKxWX5v14q1rx
                Qm2Zv/zRfVG7bTjVce4WO/Y4kCPoDhaqmHiMU0qZZSgYYKguLIMWkwtsHzeCpHRKpkKpo+eAT
                MSZ3SuFFdm9rmjoIRAUbEiDwkfLc4V01bMfwLC/cPBV+MLiyYvgrjQuE7lm03NcO5yKaixTlI
                3aQNDS0bDjYACW3JoyjESdHD22N0lO492TK7UV5RXtlSKgzAqICFXQsv00P1AwmO7lp5HBhN
                HDIPdKA5UBX6pkWmySTrK/QlP7lphd4kfkXbLZbc9f0
                veh57I4FnQfgRFesKowASPs/Vn87FNqfjt2xaP5n2pugAnZrs/nlLsKP5xemFdYWHnbnW/65yu
                yS945eBLEchgcfXjJuLWYwwWvcvaxVxqviRqx6h4UaIKrpR4gNnMQYOhQWSSWn71JMUwDMikClS8glDGmsFsbRUHxGQ1QU2jFrzkgWLTqzFM4gjI5HBBwkpBKpFBsG846PRaXC02sQ5SlxXrJHXbOBMZ1Ri4QTw09pGU
                h6sfbMZ2eH915qvQmbGzOVT2xMHemLOhFscrigzuI+P/kvTk7seruqPx+elP95rspltJ2EvhVfT6zDcjJKxEnJ1fFHx+EldsioN3RP+n6NuDCxMWXSPbLXbzCFSEm6YO
                nZY/yj/eN8o7Yriv0n+s0W7UylhZcYgmVJsRM800OXzyHNRvEskYfpq/de/+sn1inZ/kbzG/MfvNDhQp92Wadj0OTlw5fuqt3A0jMEk8EnpIPfOenvJsClwHNApbUeFiKBY49CfaHW3X
                sL44/AXUNNWAzWGD/EunoKyuHKaNuQNShqeJTCMgctpitwKuDHzkYpjInbbyn4tMNFqNcPDMAVxhFMybuBhGRIxxV07qcmKdpG6xI7Rww+dUOSv3mDF0hmjcwONa2PYz28TVfFF3sajBVD+Jh
                FNCxuZ5yD16VJYOlO2PdIX/PuUpP2Sw2vX9h9H3pDA0LRoXMssPKHsgwb0ya53tvqT7p6eEpCQhg0VGEJm8+Y4P41ZPfyE9PTKdMLitv/jvnsR7b3UVbjLrhnQkRmy/Hb8PlR/
                M3XRsQwK0n/mD1cE56+dtTJRL5Aq4DlhkMzlGoZx0AIu+YSwgJvxcsA+uNF4BpUyJSpYWmo16+B2jgiZDvZuRDC4UlVwJje1nZj8Muzrw7dFvoPByIWrULFzR
                XUH62Ci/aGgxXr0xJJfKgWUpcNrbtHeUk/27suvWPdu0qT8mLk5FRlXi5AvfXbJr+J2j7rKuz37DdanQ8FDKw8k9kUKFpQL7NUykBtB
                S16qtJU/HPDJWwZrtpkCj3RTWHY0AlX9hsHrIGLgObLyttrKpsspg00vc3RCEONx65djuzpa/DorXD8U/lORczkrHfOIZeJj/8EPPpj+XRkHvmiRLblaSGWV26EHhRUOAVwBQlZS4ggsvF1ytD2llnd0DHI8nWq5NJqnlagj1D0
                JFq20skoYEiXG6Vh0YLUZxB+hYfs+J7WCzW9zfAZ4BoFSyYDbp2/tEmaE/6HKmxu1Z8vv4RRXbznxJjBj+z+xZmdtqbxWVp7TIjHycwOk9kULt263wIVGvjUfXJ/WUF1Wgbq1z3kq/HpXG7MqsA1/kf6ZudbSOxfEO7ph2VeMXJJ3iO8jknIqsqa5PlUR15h/pq3rsS1fgOqJEDtl5C+
                gdVZAQPQxOl59GA0Zjp4xk57A5rJ0alpGQBs3OCjA72272tGB4WmI6fLz/U+iy04jfFpvJ/U0UslFRsdDsuCLW3d6rGugPujlFzh4+d8q3Rd+UouyM1VmaXNpxw/+MWTz+eqSklKzDLkI1L5u4vKKnvJFeUd3a2ntSlM5qC3M3H3/PdbYV8CiWNzZsvDnGO0ZDIjbmrEcZCzLsDg
                89AN2MRxvMDaJNHnedhBf2P5+1atqaSTixe71xi2qZcJ5q3xcu6U/DlNARkB6fDntO7XErUV0hRZmcHJMMU5MnwM7yq4rC6fq9MHfMCii+chHyyk6KZ+LuQI5V6fFpEBHmBUdqdrmiBYahiuAm4KHxf2lBw4f7G5WwYhkjm3K9Mv4aPAqAYGmTd4J3l
                E+0gEcmH+gPqO496Tsv7DK6wuPDJ2T9bdxSd1ta7QYdtN+4wY2pR4Y9nrYyfF/JT5kojtKImRM15
                9QVu5adfG3m6/EyVi6H64C28nwJdkoUlETDzavfCWkp8XDnxPkQHRgNGoVGlL3ELEk0ZnIsmp0y
                Cx687V44VP0JmJxuuzmG9Ri3FdP+ALOTZ0G4X7hYhpQlNAitmKAYWDBpPtaRgHXtEOtsg6CzW4VS6A96MIGOCxk3Fo0MOSSMBofyhQm/78RgAa5dMCzFykM8Q93y5Y2s10pcuocL9SZt9Ud5Hx46fPlQ
                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
                TDjod3kCsggzJ5gNErk8nKlUZIh4LAJTIMo0LZ268/C4Vy2slxYMKaCuwV9ouDK3vg0Sft+vaPJqttUnUgxTv9kWvE3KlCb6McbaXEz0gMKm2XydHtQpiKtlQ7ErYSbyV+63mWaZTZZdof/vyDcVC7Hnj8H2b8bltVPzhQAAAAAElFTkSuQmCC"/>
                <h3>Meraki</h3>

                <h4>Get started with programming in Python,  <br></br>English and Typing at the comfort of your home and for free</h4>
                <Link className="link-button"   href="https://www.merakilearn.org/">Visit Website</Link>
            </div>

            <div className="social-items">
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAAAwCAYAAAClvqwiAAAACXBIWXMA
              AAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAK1SURBVHgB7Zm9b9NAF
              MDf2U5pRRBGZaJLELSAhKDMDDgNMLdiQUzuBGMX2m60W6iQKANMiCR/Ad1gaIgLf0AiFqQWRBgYkS
              wE4iOxjzunaev6/Fmi+uN+kmXL7xwlv5yf7z0DcDgcDofD4XAOj4XrW48XlQ8FSAEIIrJQ2qyQy1Wyt
              ZHRKZa1C23WuHvXXle+dz/Zzg0Lo/Di3e1Zt89mXXNQTuVu1h5p45pbXIII7Eqg4AIWcw0yM5gyvvx
              6pX793bCdGxtW6M5VBOuagzJ28saGV1yAkNgl9KEypAokmMAzYk5pykfE/EtyqDiCGLeRacxCggkkw
              pIg5RuAYdIR7ElwzRFJwVdEXCSM5i7pZ47OPIGoiNDyCnuKiNNMQCDqz9/eWoIB4Zoss3A77IUpImsSKA4RWZRAsYnIqgTKjghPCQCtNEugWE8NPwl/jB/FVe2KD
              ilGSooEDIZ85+rT0Mt4OXd+45lWqvqNIzNCJrd/l12GRq5N/z/fOu9lsqkQkov5u3RX9RsnrGqn9b+GVMTAWHmRWUJnC501kHKsZOkrQzzWTEsDxo2dp4anjN2eQwFSiq
              3WoDLmlM/FIbHbIOlhX/L0bsAMmqhFVw6PtIKMcxRdcZVxKEVXFm8T1+ozazI8+xFxzhlRmJ/aeoCQ9TtkE+Nax/y51l8s+jZv0zIzyDuYJpGwRA6nyaYICF
              X2rpECdbH7MkjKWnNG4y/j/tSmyq6oYXJIGFHpYeB2PpXxsH52BgOuOaPxbucLwKyjLBBIl7fHhGOlPqE6ZNBehdFNZjsfGSfoLrQIik1GAho2SGDd0tsx3ItFEkGxZCBYTkLDprw+rpFEubz/PCJ/ZvnNRLV3PGAWaaJi0P8CQa8xEdZX6udc/9kgzJ
              c+TiMwFcDCcSQQCevuL4U5HA6Hw+FwgvIPH2OUlxXAugUAAAAASUVORK5CYII="></img>
              <h3>Code India Fellowship</h3>
              <h4>Nurture programming skills in the  <br></br>next generation of India’s youth with your expertise.</h4>
              <Link className="link-button"  href="https://www.codeindiafellowship.org/">Visit Website</Link>
              </div>

          </div>
          <Campuses />
          <KeyFacilties/>
      </div>
    </>
  );
};

export default Content;
