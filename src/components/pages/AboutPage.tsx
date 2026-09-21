import React from 'react';
import { AdSensePlaceholder } from '../AdSensePlaceholder';
import { CheckCircle2, Shield, Zap, Target } from 'lucide-react';

export const AboutPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
      <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-6 sm:p-10 space-y-8">
        <div>
          <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider">About Us</span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
            About Fast Calculator
          </h1>
          <p className="text-slate-600 mt-3 text-base leading-relaxed">
            Welcome to <strong>Fast Calculator</strong>, your dedicated online suite of fast, reliable, and mathematically verified calculators.
          </p>
        </div>

        <AdSensePlaceholder slotId="about-top" format="horizontal" />

        <div className="space-y-4 text-slate-700 leading-relaxed">
          <h2 className="text-xl font-bold text-slate-900">Our Mission</h2>
          <p>
            Our core mission is to eliminate confusion around everyday financial, mathematical, educational, and unit calculations. Fast Calculator was engineered from the ground up to address these specific needs with speed, accuracy, and zero bloat.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
          <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
            <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
              <Zap className="w-4 h-4" />
              <span>Instant Client-Side Computation</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Every formula executes directly in your browser using pure JavaScript. Your financial data, salaries, and personal inputs are never uploaded to any remote server.
            </p>
          </div>

          <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
            <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
              <Target className="w-4 h-4" />
              <span>Tailored for Pakistan</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Includes authentic Pakistani FBR GST rates, Punjab/Sindh service sales taxes, Land conversion (Kanal, Marla, Acre), BISE matric/intermediate grading scales, and Pakistani university GPA (4.0) frameworks.
            </p>
          </div>

          <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
            <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
              <Shield className="w-4 h-4" />
              <span>AdSense &amp; Privacy Compliant</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              We practice strictly ethical, non-intrusive ad placement. We never use deceptive click traps, pop-ups, or concealed links.
            </p>
          </div>

          <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
            <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
              <CheckCircle2 className="w-4 h-4" />
              <span>100% Free Forever</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Accessible to all students, entrepreneurs, shopkeepers, and professionals with unlimited calculations and no subscription barriers.
            </p>
          </div>
        </div>

        <div className="space-y-3 pt-4 border-t border-slate-200 text-sm text-slate-600">
          <h3 className="font-bold text-slate-900 text-base">Editorial &amp; Verification Standards</h3>
          <p>
            All mathematical algorithms and formulas deployed on Fast Calculator have been cross-checked against standard academic textbooks and official financial guidelines.
          </p>
        </div>
      </div>
    </div>
  );
};
