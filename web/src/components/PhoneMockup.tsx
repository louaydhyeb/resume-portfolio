import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { profile } from '../data/cv';
import { useLanguage } from '../i18n/LanguageContext';
import profilePhoto from '../assets/profile.jpg';
import './PhoneMockup.css';

const screens = ['home', 'code'] as const;
type Screen = (typeof screens)[number];

export function PhoneMockup() {
  const { lang, t } = useLanguage();
  const [screen, setScreen] = useState<Screen>('home');
  const [time, setTime] = useState('');

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      const locale = lang === 'fr' ? 'fr-FR' : 'en-US';
      setTime(now.toLocaleTimeString(locale, { hour: '2-digit', minute: '2-digit' }));
    };
    tick();
    const id = setInterval(tick, 30_000);
    return () => clearInterval(id);
  }, [lang]);

  useEffect(() => {
    const id = setInterval(() => {
      setScreen((s) => (s === 'home' ? 'code' : 'home'));
    }, 5000);
    return () => clearInterval(id);
  }, []);

  const phone = t.phone;

  return (
    <motion.div
      className="phone-mockup"
      initial={{ opacity: 0, y: 40, rotateY: -12 }}
      animate={{ opacity: 1, y: 0, rotateY: 0 }}
      transition={{ delay: 0.5, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="phone-mockup__glow" />

      <div className="phone-mockup__device">
        <div className="phone-mockup__bezel">
          <div className="phone-mockup__camera" />

          <div className="phone-mockup__statusbar">
            <span>{time}</span>
            <div className="phone-mockup__status-icons">
              <span className="phone-mockup__signal" />
              <span className="phone-mockup__wifi" />
              <span className="phone-mockup__battery" />
            </div>
          </div>

          <div className="phone-mockup__screen">
            <AnimatePresence mode="wait">
              {screen === 'home' ? (
                <motion.div
                  key="home"
                  className="phone-screen phone-screen--home"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="phone-screen__header">
                    <img src={profilePhoto} alt="" className="phone-screen__avatar" />
                    <div>
                      <p className="phone-screen__hello">{phone.hello}</p>
                      <p className="phone-screen__name">{profile.name.split(' ')[0]}</p>
                    </div>
                  </div>

                  <div className="phone-screen__card phone-screen__card--green">
                    <span className="phone-screen__card-label">{phone.roleLabel}</span>
                    <strong>{phone.role}</strong>
                  </div>

                  <div className="phone-screen__stats">
                    <div className="phone-screen__stat">
                      <span>7+</span>
                      <small>{phone.years}</small>
                    </div>
                    <div className="phone-screen__stat">
                      <span>Kotlin</span>
                      <small>{phone.expert}</small>
                    </div>
                    <div className="phone-screen__stat">
                      <span>MVVM</span>
                      <small>{phone.clean}</small>
                    </div>
                  </div>

                  <div className="phone-screen__fab">
                    <span />
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="code"
                  className="phone-screen phone-screen--code"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="phone-screen__ide-tabs">
                    <span className="active">MainActivity.kt</span>
                    <span>build.gradle</span>
                  </div>
                  <pre className="phone-screen__ide-code">{`@Composable
fun Greeting(name: String) {
  MaterialTheme {
    Column(
      modifier = Modifier
        .fillMaxSize()
        .padding(24.dp),
      verticalArrangement =
        Arrangement.Center
    ) {
      Text(
        text = "Hello $name!",
        style = MaterialTheme
          .typography.headlineMedium
      )
    }
  }
}`}</pre>
                  <div className="phone-screen__build">
                    <motion.div
                      className="phone-screen__build-bar"
                      animate={{ width: ['0%', '100%'] }}
                      transition={{ duration: 2.5, ease: 'easeInOut' }}
                    />
                    <span>{phone.building}</span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="phone-mockup__navbar">
            <span className="active" />
            <span />
            <span />
          </div>
        </div>
      </div>

      <motion.div
        className="phone-mockup__orbit phone-mockup__orbit--kotlin"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      >
        <span>K</span>
      </motion.div>
    </motion.div>
  );
}
