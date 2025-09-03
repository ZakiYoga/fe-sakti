import React, { useState } from 'react';
import { Mail, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface SubscribeFormProps {
  className?: string;
}

const SubscribeSection: React.FC<SubscribeFormProps> = ({ className = '' }) => {
  const [email, setEmail] = useState<string>('');
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSubmit = async () => {
    if (!email.includes('@')) return;
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true);
      setIsLoading(false);
      setEmail('');
    }, 1500);
  };

  const resetForm = () => {
    setIsSubmitted(false);
    setEmail('');
  };

  return (
    <section className={`relative px-4 sm:px-8 lg:px-16 xl:px-20 py-8 lg:py-2 overflow-hidden ${className}`}>
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-600 via-gray-700 to-gray-800"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-white/5 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-orange-400/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/3 w-24 h-24 bg-orange-400/10 rounded-full blur-lg animate-pulse delay-500"></div>
      </div>

      <div className="relative max-xl mx-auto text-center">
        {!isSubmitted ? (
          <>
            {/* Header Content */}
            <div className="mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl mb-6 mx-auto">
                <Mail className="w-8 h-8 text-white" />
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold font-bebas-neue tracking-widest text-white mb-4">
                Subscribe{' '}
                <span className="bg-gradient-to-r from-orange-400 via-orange-600 to-orange-700 bg-clip-text text-transparent">
                  SaktiNews
                </span>
              </h2>
            </div>

            {/* Subscribe Form */}
            <div className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-2">
                <div className="flex-1 relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="w-full px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-md text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all duration-300"
                  />
                </div>
                
                <Button
                variant="press"
                  onClick={handleSubmit}
                  disabled={isLoading || !email.includes('@')}
                  className="px-8 py-7 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold rounded-md transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 focus:ring-offset-transparent disabled:opacity-50 disabled:cursor-not-allowed group"
                >
                  {isLoading ? (
                    <div className="flex items-center justify-center">
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center gap-2">
                      <span>Subscribe</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  )}
                </Button>
              </div>
              
              <p className="text-sm text-gray-300 mt-4">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap justify-center items-center gap-8 mt-12 text-gray-300">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="text-sm">No spam, ever</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="text-sm">Weekly insights</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="text-sm">Exclusive content</span>
              </div>
            </div>
          </>
        ) : (
          // Success State
          <div className="max-w-md mx-auto">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-green-500/20 backdrop-blur-sm rounded-full mb-6 mx-auto">
              <CheckCircle className="w-10 h-10 text-green-400" />
            </div>
            
            <h3 className="text-3xl font-bold text-white mb-4">
              Thank You!
            </h3>
            
            <p className="text-lg text-gray-200 mb-8">
              You&apos;ve successfully subscribed to our newsletter. Check your inbox for a welcome message!
            </p>
            
            <button
              onClick={resetForm}
              className="px-6 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white rounded-xl border border-white/20 transition-all duration-300"
            >
              Subscribe Another Email
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default SubscribeSection;