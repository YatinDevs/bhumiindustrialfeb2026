import ServicesData from '@/data/services.json'
import SeoWrapper from '@/components/SeoWrapper/SeoWrapper'

export default function Services() {
  return (
    <SeoWrapper pageKey="services">
      <main className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-bold mb-16 text-center text-gray-800">
            {ServicesData.title}
          </h1>
          
          <div className="grid md:grid-cols-2 gap-8">
            {ServicesData.services.map((service, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-2xl p-8 hover:shadow-2xl transition-all group">
                <h2 className="text-3xl font-bold mb-6 text-gray-800 group-hover:text-blue-600">
                  {service.name}
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </SeoWrapper>
  )
}
