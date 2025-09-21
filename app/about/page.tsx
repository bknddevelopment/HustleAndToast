'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Award, Globe, Heart, Users, ArrowRight } from 'lucide-react'

const values = [
  {
    icon: Award,
    title: 'Uncompromising Quality',
    description: 'Every piece in our collection is meticulously crafted using only the finest materials and time-honored techniques.',
  },
  {
    icon: Globe,
    title: 'Global Curation',
    description: 'We travel the world to source exceptional products from renowned artisans and luxury houses.',
  },
  {
    icon: Heart,
    title: 'Passionate Service',
    description: 'Our dedicated team provides personalized attention to ensure an extraordinary shopping experience.',
  },
  {
    icon: Users,
    title: 'Exclusive Community',
    description: 'Join a discerning community of connoisseurs who appreciate the finer things in life.',
  },
]

const milestones = [
  { year: '2020', title: 'Founded', description: 'LUXE was born from a vision to redefine luxury retail' },
  { year: '2021', title: 'First Collection', description: 'Launched our inaugural collection of timepieces' },
  { year: '2022', title: 'Global Expansion', description: 'Extended our reach to serve customers worldwide' },
  { year: '2023', title: 'Sustainability Focus', description: 'Introduced eco-conscious luxury initiatives' },
  { year: '2024', title: 'Digital Innovation', description: 'Pioneering the future of luxury e-commerce' },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1920&q=80"
            alt="Luxury store interior"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/30 to-white/50" />
        </div>
        
        <div className="relative z-10 text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="luxe-heading-1 text-luxe-charcoal mb-6 drop-shadow-lg"
          >
            Our Story
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-luxe-charcoal/90 max-w-3xl mx-auto drop-shadow-md"
          >
            Empowering achievement and celebrating success through relentless hustle and grateful toasts
          </motion.p>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20">
        <div className="luxe-container">
          {/* Mission Statement Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto mb-16 text-center"
          >
            <div className="bg-gradient-to-br from-luxe-cream to-white p-10 border border-luxe-gold/20 shadow-xl">
              <h2 className="luxe-heading-2 text-luxe-gold mb-6">Our Mission</h2>
              <p className="text-xl text-luxe-charcoal leading-relaxed font-light italic">
                "At Hustle and Toast, our mission is to inspire relentless ambition while fostering gratitude.
                We empower individuals to chase their goals, celebrate their milestones, and honor the people
                and moments that make the journey meaningful."
              </p>
            </div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="luxe-heading-2 mb-6">Welcome to Hustle and Toast</h2>
              <p className="text-lg text-luxe-slate mb-6 leading-relaxed">
                Welcome to Hustle and Toast - a vibrant lifestyle brand rooted in celebrating
                achievements and expressing gratitude. We embody the spirit of relentless hustle
                while honoring the beauty of acknowledging success through toasting.
              </p>
              <p className="text-lg text-luxe-slate mb-6 leading-relaxed">
                Our brand is a beacon of inspiration, encouraging you to pursue your goals,
                overcome challenges, and celebrate every win along the way.
              </p>
              <p className="text-lg text-luxe-slate mb-6 leading-relaxed">
                At Hustle and Toast, we know success is more meaningful when paired with gratitude.
                Every toast is more than a gesture—it's a heartfelt expression of appreciation for
                the people, moments, and experiences that enrich our lives.
              </p>
              <p className="text-lg text-luxe-slate mb-8 leading-relaxed">
                Join us on this journey of empowerment, celebration, and unity. Whether you're
                raising a glass to your own achievements or finding motivation in our community,
                you'll always have a reason to hustle harder and toast louder.
              </p>
              <Link href="/products" className="luxe-button-gold inline-flex items-center gap-2">
                Explore Collection
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h-[600px]"
            >
              <Image
                src="https://images.unsplash.com/photo-1609709295948-17d77cb2a69b?w=800&q=80"
                alt="Luxury craftsmanship"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-luxe-cream">
        <div className="luxe-container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="luxe-heading-2 mb-4">Our Values</h2>
            <p className="text-lg text-luxe-slate">
              The principles that guide everything we do
            </p>
          </motion.div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 mb-4 border border-luxe-gold text-luxe-gold">
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-lg font-light tracking-wider uppercase mb-3">
                    {value.title}
                  </h3>
                  <p className="text-sm text-luxe-slate leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="luxe-container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="luxe-heading-2 mb-4">Our Journey</h2>
            <p className="text-lg text-luxe-slate">
              Milestones that mark our evolution
            </p>
          </motion.div>
          
          <div className="max-w-4xl mx-auto">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`flex items-center gap-8 mb-12 ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                <div className={`flex-1 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                  <h3 className="text-2xl font-light text-luxe-gold mb-2">{milestone.title}</h3>
                  <p className="text-luxe-slate">{milestone.description}</p>
                </div>
                <div className="relative">
                  <div className="w-16 h-16 bg-luxe-gold text-white flex items-center justify-center font-bold">
                    {milestone.year}
                  </div>
                  {index < milestones.length - 1 && (
                    <div className="absolute top-16 left-1/2 -translate-x-1/2 w-0.5 h-12 bg-luxe-border" />
                  )}
                </div>
                <div className="flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-luxe-cream">
        <div className="luxe-container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="luxe-heading-2 mb-4">The Visionaries</h2>
            <p className="text-lg text-luxe-slate">
              Meet the team behind LUXE's exceptional curation
            </p>
          </motion.div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: 'Alexandra Chen', role: 'Founder & CEO', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80' },
              { name: 'Marcus Laurent', role: 'Creative Director', image: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?w=400&q=80' },
              { name: 'Isabella Romano', role: 'Head of Curation', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80' },
              { name: 'David Kim', role: 'Head of Experience', image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80' },
            ].map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="relative w-full aspect-square mb-4 overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover filter grayscale hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                <h3 className="text-lg font-light tracking-wider mb-1">{member.name}</h3>
                <p className="text-sm text-luxe-gold">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="luxe-container text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="luxe-heading-2 mb-6">Begin Your Luxury Journey</h2>
            <p className="text-lg text-luxe-gray-400 mb-8">
              Join us in celebrating the art of living well. Discover products that 
              inspire, elevate, and endure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/products" className="luxe-button-gold">
                Shop Collection
              </Link>
              <Link href="/contact" className="luxe-button">
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}