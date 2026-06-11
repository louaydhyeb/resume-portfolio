import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './KotlinTerminal.css';

const codeLines = [
  { text: '@HiltViewModel', cls: 'annotation' },
  { text: 'class ProfileViewModel @Inject constructor(', cls: 'keyword' },
  { text: '    private val repo: ProfileRepository', cls: 'param' },
  { text: ') : ViewModel() {', cls: 'keyword' },
  { text: '', cls: '' },
  { text: '    val uiState = repo.profile', cls: 'property' },
  { text: '        .stateIn(', cls: 'method' },
  { text: '            scope = viewModelScope,', cls: 'param' },
  { text: '            started = SharingStarted.WhileSubscribed(5_000),', cls: 'param' },
  { text: '            initialValue = ProfileUiState.Loading', cls: 'param' },
  { text: '        )', cls: 'method' },
  { text: '}', cls: 'keyword' },
];

export function KotlinTerminal() {
  const [visibleLines, setVisibleLines] = useState(0);
  const [cursorOn, setCursorOn] = useState(true);

  useEffect(() => {
    const blink = setInterval(() => setCursorOn((v) => !v), 530);
    return () => clearInterval(blink);
  }, []);

  useEffect(() => {
    if (visibleLines >= codeLines.length) {
      const reset = setTimeout(() => setVisibleLines(0), 4000);
      return () => clearTimeout(reset);
    }
    const timer = setTimeout(() => setVisibleLines((v) => v + 1), 280);
    return () => clearTimeout(timer);
  }, [visibleLines]);

  return (
    <motion.div
      className="kotlin-terminal"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.6 }}
    >
      <div className="kotlin-terminal__titlebar">
        <div className="kotlin-terminal__dots">
          <span /><span /><span />
        </div>
        <span className="kotlin-terminal__filename">ProfileViewModel.kt</span>
        <span className="kotlin-terminal__badge">Kotlin</span>
      </div>
      <div className="kotlin-terminal__body">
        <div className="kotlin-terminal__gutter">
          {codeLines.map((_, i) => (
            <span key={i} className={i < visibleLines ? 'visible' : ''}>{i + 1}</span>
          ))}
        </div>
        <pre className="kotlin-terminal__code">
          {codeLines.slice(0, visibleLines).map((line, i) => (
            <motion.div
              key={i}
              className="kotlin-terminal__line"
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.2 }}
            >
              <span className={line.cls ? `kt-${line.cls}` : undefined}>{line.text}</span>
            </motion.div>
          ))}
          {visibleLines < codeLines.length && (
            <span className={`kotlin-terminal__cursor ${cursorOn ? 'on' : ''}`}>|</span>
          )}
        </pre>
      </div>
    </motion.div>
  );
}
