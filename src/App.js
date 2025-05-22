
// App.jsx
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const languages = {
  en: {
    welcome: 'Welcome to GlowTracker365',
    subtitle: 'Your personal beauty and willpower tracker!',
    weight: 'Weight Tracker',
    skincare: 'Skincare Tracker',
    affirmation: 'Affirmation',
    willpower: 'Willpower',
    languageToggle: 'සිංහල',
  },
  si: {
    welcome: 'GlowTracker365 වෙත සාදරයෙන් පිළිගනිමු',
    subtitle: 'ඔබේ ආකර්ෂණය සහ අදාළ ශක්තිය පරීක්ෂා කිරීම සඳහා!',
    weight: 'උසස් බර සටහන',
    skincare: 'සන්සුන් රූපලාවන්‍ය සටහන',
    affirmation: 'ධන වාක්‍ය',
    willpower: 'සධානය',
    languageToggle: 'English',
  },
};

export default function App() {
  const [lang, setLang] = useState('en');
  const t = languages[lang];

  return (
    <div className="p-6">
      <Button onClick={() => setLang(lang === 'en' ? 'si' : 'en')} className="mb-4">
        {t.languageToggle}
      </Button>
      <h1 className="text-4xl font-bold mb-2">{t.welcome}</h1>
      <p className="text-lg mb-6">{t.subtitle}</p>
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardContent className="p-4">
            <h2 className="text-xl font-semibold mb-2">{t.weight}</h2>
            <input type="number" className="border p-2 w-full" placeholder="Enter weight" />
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <h2 className="text-xl font-semibold mb-2">{t.skincare}</h2>
            <textarea className="border p-2 w-full" placeholder="Skincare notes" />
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <h2 className="text-xl font-semibold mb-2">{t.affirmation}</h2>
            <textarea className="border p-2 w-full" placeholder="Daily affirmations" />
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <h2 className="text-xl font-semibold mb-2">{t.willpower}</h2>
            <textarea className="border p-2 w-full" placeholder="Willpower notes" />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
