export function Contact() {
  return (
    <section id="contact" className="relative w-full -mt-16 md:-mt-24 pt-0 pb-16 md:pb-24 bg-background flex flex-col items-center z-10">
      <div className="w-full max-w-7xl px-4 md:px-6">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-center tracking-wider">
          CONTACT
        </h2>

        {/* Spacer */}
        <div className="h-24 md:h-32 w-full" aria-hidden="true"></div>

        {/* Split Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-8 items-start">
          {/* Left Side: Name */}
          <div className="flex flex-col gap-10 md:pl-8 lg:pl-16">
            <div className="flex flex-col gap-2">
              <span className="text-sm font-medium text-primary uppercase tracking-widest">
                Name
              </span>
              <h3 className="text-2xl md:text-3xl font-medium text-foreground">
                김용언
              </h3>
            </div>
          </div>

          {/* Right Side: Contact Info */}
          <div className="flex flex-col gap-10 md:border-l md:border-border/50 md:pl-12 lg:pl-24">
            {/* Email Field */}
            <div className="flex flex-col gap-2">
              <span className="text-sm font-medium text-primary uppercase tracking-widest">
                Email
              </span>
              <a 
                href="mailto:jack6245@naver.com" 
                className="text-2xl md:text-3xl font-medium text-foreground hover:text-foreground/80 transition-colors"
              >
                jack6245@naver.com
              </a>
            </div>

            {/* Phone Field */}
            <div className="flex flex-col gap-2">
              <span className="text-sm font-medium text-primary uppercase tracking-widest">
                Phone
              </span>
              <a 
                href="tel:010-0000-0000" 
                className="text-2xl md:text-3xl font-medium text-foreground hover:text-foreground/80 transition-colors"
              >
                010-0000-0000
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
