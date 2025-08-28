'use client'

import { useState, useMemo } from 'react'
import { useTheme } from './contexts/ThemeContext'
import { 
  PhoneIcon, 
  EnvelopeIcon, 
  GlobeAltIcon, 
  MagnifyingGlassIcon,
  UserGroupIcon,
  HomeIcon,
  BriefcaseIcon,
  ArrowLeftIcon
} from '@heroicons/react/24/outline'

type ServiceCategory = 'training' | 'financial' | 'licensing' | 'coaching' | 'technology' | 'family-support'

interface Resource {
  id: string
  name: string
  organization: string
  category: ServiceCategory
  description: string
  eligibility?: string
  contact: {
    phone?: string
    email?: string
    website?: string
  }
  relevantFor: string[]
  tags: string[]
}

const resources: Resource[] = [
  {
    id: 'tecta-infant-orientation',
    name: 'Infant/Toddler Orientation',
    organization: 'TECTA',
    category: 'training',
    description: 'Foundational training on infant and toddler development, covering key milestones, appropriate practices, and safety protocols.',
    eligibility: 'ECE professionals working with children 0-3 years',
    contact: {
      phone: '(865) 974-7053',
      email: 'tecta@utk.edu',
      website: 'tecta.utk.edu'
    },
    relevantFor: ['infant-toddler', 'new-career', 'family-childcare'],
    tags: ['orientation', 'infant', 'toddler', 'development', 'training']
  },
  {
    id: 'ccrr-infant-coaching',
    name: 'Infant/Toddler Quality Coaching',
    organization: 'CCR&R',
    category: 'coaching',
    description: 'One-on-one coaching support for professionals working with infants and toddlers, focusing on quality improvement and best practices.',
    eligibility: 'Licensed child care providers',
    contact: {
      phone: '(865) 974-7053',
      website: 'tnchildcareresource.org'
    },
    relevantFor: ['infant-toddler', 'experienced-provider', 'quality-improvement'],
    tags: ['coaching', 'quality', 'infant', 'toddler', 'mentorship']
  },
  {
    id: 'wage-support',
    name: 'WAGE$ Salary Supplements',
    organization: 'Child Care WAGE$ Project',
    category: 'financial',
    description: 'Six-month salary supplements for qualified early childhood professionals based on education level and commitment to the field.',
    eligibility: 'ECE professionals with specific education requirements working in licensed programs',
    contact: {
      website: 'childcaretn.gov/wage',
      email: 'wage@childcaretn.gov'
    },
    relevantFor: ['all-career-stages', 'salary-support'],
    tags: ['salary', 'financial', 'supplement', 'education', 'commitment']
  },
  {
    id: 'tecta-admin-orientation',
    name: 'Administrator Orientation',
    organization: 'TECTA',
    category: 'training',
    description: 'Training for current and aspiring child care administrators covering leadership, business management, and regulatory compliance.',
    eligibility: 'Child care center directors and assistant directors',
    contact: {
      phone: '(865) 974-7053',
      website: 'tecta.utk.edu'
    },
    relevantFor: ['experienced-provider', 'administrator', 'business-owner'],
    tags: ['administration', 'leadership', 'management', 'compliance']
  },
  {
    id: 'ccrr-business-support',
    name: 'Small Business Support',
    organization: 'CCR&R',
    category: 'coaching',
    description: 'Business coaching and technical assistance for family child care providers and center administrators.',
    eligibility: 'Licensed child care providers and administrators',
    contact: {
      phone: '(865) 974-7053',
      website: 'tnchildcareresource.org'
    },
    relevantFor: ['family-childcare', 'business-owner', 'administrator'],
    tags: ['business', 'coaching', 'technical-assistance', 'family-childcare']
  },
  {
    id: 'dhs-licensing',
    name: 'Child Care Licensing',
    organization: 'TN DHS',
    category: 'licensing',
    description: 'Licensing support for new and existing child care programs, including application assistance and compliance guidance.',
    eligibility: 'Current and prospective child care providers',
    contact: {
      phone: '1-877-486-1831',
      website: 'tn.gov/humanservices/for-families/child-care-services'
    },
    relevantFor: ['new-provider', 'family-childcare', 'business-owner'],
    tags: ['licensing', 'compliance', 'regulations', 'application']
  },
  {
    id: 'tech-goes-home',
    name: 'Technology Access Program',
    organization: 'Tech Goes Home',
    category: 'technology',
    description: 'Digital literacy training and technology access for early childhood educators and families.',
    eligibility: 'ECE professionals and families in participating programs',
    contact: {
      website: 'techgoeshome.org',
      email: 'info@techgoeshome.org'
    },
    relevantFor: ['all-career-stages', 'family-engagement'],
    tags: ['technology', 'digital-literacy', 'access', 'families']
  },
  {
    id: 'cda-credential',
    name: 'CDA Credential Support',
    organization: 'TECTA',
    category: 'training',
    description: 'Support for earning Child Development Associate (CDA) credentials, including portfolio development and exam preparation.',
    eligibility: 'ECE professionals with required experience hours',
    contact: {
      phone: '(865) 974-7053',
      website: 'tecta.utk.edu'
    },
    relevantFor: ['infant-toddler', 'new-career', 'credential-seeking'],
    tags: ['CDA', 'credential', 'portfolio', 'certification']
  },
  {
    id: 'family-engagement',
    name: 'Family Engagement Coaching',
    organization: 'CCR&R',
    category: 'family-support',
    description: 'Coaching and resources to strengthen family engagement practices in early childhood programs.',
    eligibility: 'Licensed child care providers',
    contact: {
      phone: '(865) 974-7053',
      website: 'tnchildcareresource.org'
    },
    relevantFor: ['all-career-stages', 'family-engagement'],
    tags: ['family-engagement', 'coaching', 'relationships', 'communication']
  }
]

const categoryLabels = {
  'training': 'Training & Education',
  'financial': 'Financial Support',
  'licensing': 'Licensing & Compliance',
  'coaching': 'Coaching & Support',
  'technology': 'Technology & Innovation',
  'family-support': 'Family & Community'
}

const categoryColors = {
  'training': 'bg-blue-100 text-blue-800 border-blue-200',
  'financial': 'bg-green-100 text-green-800 border-green-200',
  'licensing': 'bg-purple-100 text-purple-800 border-purple-200',
  'coaching': 'bg-orange-100 text-orange-800 border-orange-200',
  'technology': 'bg-teal-100 text-teal-800 border-teal-200',
  'family-support': 'bg-pink-100 text-pink-800 border-pink-200'
}

export default function ResourceDirectory() {
  const { theme } = useTheme()
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<ServiceCategory | 'all'>('all')
  const [selectedResource, setSelectedResource] = useState<Resource | null>(null)
  const [showInfantToddlerPath, setShowInfantToddlerPath] = useState(false)

  const filteredResources = useMemo(() => {
    return resources.filter(resource => {
      const matchesSearch = resource.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          resource.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          resource.organization.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          resource.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      
      const matchesCategory = selectedCategory === 'all' || resource.category === selectedCategory
      
      return matchesSearch && matchesCategory
    })
  }, [searchTerm, selectedCategory])

  const infantToddlerResources = resources.filter(r => r.relevantFor.includes('infant-toddler'))

  if (showInfantToddlerPath) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-teal-50 to-blue-50 p-4" style={{background: 'var(--background)'}}>
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-teal-500 to-blue-600 text-white p-6 rounded-2xl mb-6">
            <h1 className="text-2xl md:text-3xl font-bold mb-2 font-serif">Infant/Toddler Career Path</h1>
            <p className="text-lg opacity-90">Resources specifically for infant and toddler specialists</p>
          </div>

          <div className="mb-4">
            <button 
              onClick={() => setShowInfantToddlerPath(false)}
              className="text-blue-600 hover:text-blue-800 font-medium flex items-center gap-1"
            >
              <ArrowLeftIcon className="w-4 h-4" />
              Back to All Resources
            </button>
          </div>

          <div className="space-y-4">
            {infantToddlerResources.map((resource, index) => (
              <div key={resource.id} className="bg-card rounded-xl p-6 shadow-lg border-l-4 border-teal-500">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-card-foreground font-serif">{resource.name}</h3>
                    <p className="text-sm text-muted-foreground">{resource.organization}</p>
                  </div>
                  <span className="text-sm font-medium text-teal-600 bg-teal-50 px-2 py-1 rounded">
                    Step {index + 1}
                  </span>
                </div>
                <p className="text-muted-foreground mb-4">{resource.description}</p>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                  <div className="text-sm text-muted-foreground">
                    <strong>Eligibility:</strong> {resource.eligibility}
                  </div>
                  <button 
                    onClick={() => setSelectedResource(resource)}
                    className="bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:opacity-90 transition-opacity text-sm font-medium"
                  >
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-background">
      {/* Hero Section */}
      <div className={`text-white ${theme === 'retro' ? 'synthwave-grid' : 'bg-gradient-to-r from-blue-600 to-purple-700'}`}>
        {theme === 'retro' && <div className="synthwave-mountains"></div>}
        <div className="max-w-6xl mx-auto px-4 py-12 relative z-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-2 font-serif">Big Map Directory</h1>
          <p className="text-lg md:text-xl opacity-90">Your one-stop shop for early childhood education services and support</p>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-card border-b border-border py-4">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col sm:flex-row gap-3">
            <button 
              onClick={() => setShowInfantToddlerPath(true)}
              className="bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:opacity-90 transition-opacity font-medium flex items-center gap-2"
            >
              <UserGroupIcon className="w-5 h-5" />
              Infant/Toddler Career Path
            </button>
            <button className="bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:opacity-90 transition-opacity font-medium flex items-center gap-2">
              <BriefcaseIcon className="w-5 h-5" />
              Administrator Path
            </button>
            <button className="bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:opacity-90 transition-opacity font-medium flex items-center gap-2">
              <HomeIcon className="w-5 h-5" />
              Family Child Care Path
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Search and Filters */}
        <div className="bg-card rounded-xl p-6 shadow-lg mb-8 border border-border">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1">
              <label className="block text-sm font-medium text-card-foreground mb-2">
                Search Resources
              </label>
              <input
                type="text"
                placeholder="Search by name, organization, or keyword..."
                className="w-full p-3 border border-border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-background text-foreground"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="lg:w-64">
              <label className="block text-sm font-medium text-card-foreground mb-2">
                Filter by Category
              </label>
              <select
                className="w-full p-3 border border-border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-background text-foreground"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value as ServiceCategory | 'all')}
              >
                <option value="all">All Categories</option>
                {Object.entries(categoryLabels).map(([key, label]) => (
                  <option key={key} value={key}>{label}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-muted-foreground">
            Showing {filteredResources.length} of {resources.length} resources
            {searchTerm && ` for "${searchTerm}"`}
            {selectedCategory !== 'all' && ` in ${categoryLabels[selectedCategory]}`}
          </p>
        </div>

        {/* Resource Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredResources.map((resource) => (
            <div key={resource.id} className="bg-card rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-border">
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-bold text-card-foreground leading-tight font-serif">{resource.name}</h3>
                  <span className={`text-xs font-bold px-3 py-1 rounded-full border ${categoryColors[resource.category]}`}>
                    {categoryLabels[resource.category]}
                  </span>
                </div>
                
                <p className="text-sm text-blue-600 font-medium mb-3">{resource.organization}</p>
                
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{resource.description}</p>
                
                <div className="space-y-2">
                  {resource.contact.phone && (
                    <div className="text-sm text-muted-foreground flex items-center gap-1">
                      <PhoneIcon className="w-4 h-4" />
                      {resource.contact.phone}
                    </div>
                  )}
                  {resource.contact.website && (
                    <div className="text-sm text-muted-foreground flex items-center gap-1">
                      <GlobeAltIcon className="w-4 h-4" />
                      {resource.contact.website}
                    </div>
                  )}
                </div>
                
                <button 
                  onClick={() => setSelectedResource(resource)}
                  className="w-full mt-4 bg-primary text-primary-foreground py-2 px-4 rounded-lg hover:opacity-90 transition-opacity font-medium"
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredResources.length === 0 && (
          <div className="text-center py-12">
            <div className="text-muted-foreground mb-4 flex justify-center">
              <MagnifyingGlassIcon className="w-16 h-16" />
            </div>
            <h3 className="text-xl font-medium text-muted-foreground mb-2 font-serif">No resources found</h3>
            <p className="text-muted-foreground opacity-75">Try adjusting your search terms or filters</p>
          </div>
        )}
      </div>

      {/* Resource Detail Modal */}
      {selectedResource && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-card rounded-xl max-w-2xl w-full max-h-screen overflow-y-auto border border-border">
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h2 className="text-2xl font-bold text-card-foreground font-serif">{selectedResource.name}</h2>
                  <p className="text-blue-600 font-medium">{selectedResource.organization}</p>
                </div>
                <button 
                  onClick={() => setSelectedResource(null)}
                  className="text-muted-foreground hover:text-card-foreground text-2xl"
                >
                  ×
                </button>
              </div>
              
              <div className="mb-4">
                <span className={`inline-block text-sm font-bold px-3 py-1 rounded-full border text-bold ${categoryColors[selectedResource.category]}`}>
                  {categoryLabels[selectedResource.category]}
                </span>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-card-foreground mb-2 font-serif">Description</h3>
                  <p className="text-muted-foreground">{selectedResource.description}</p>
                </div>
                
                {selectedResource.eligibility && (
                  <div>
                    <h3 className="font-semibold text-card-foreground mb-2 font-serif">Eligibility</h3>
                    <p className="text-muted-foreground">{selectedResource.eligibility}</p>
                  </div>
                )}
                
                <div>
                  <h3 className="font-semibold text-card-foreground mb-2 font-serif">Contact Information</h3>
                  <div className="space-y-2">
                    {selectedResource.contact.phone && (
                      <div className="flex items-center gap-2">
                        <PhoneIcon className="w-4 h-4 text-muted-foreground" />
                        <a href={`tel:${selectedResource.contact.phone}`} className="text-blue-600 hover:underline">
                          {selectedResource.contact.phone}
                        </a>
                      </div>
                    )}
                    {selectedResource.contact.email && (
                      <div className="flex items-center gap-2">
                        <EnvelopeIcon className="w-4 h-4 text-muted-foreground" />
                        <a href={`mailto:${selectedResource.contact.email}`} className="text-blue-600 hover:underline">
                          {selectedResource.contact.email}
                        </a>
                      </div>
                    )}
                    {selectedResource.contact.website && (
                      <div className="flex items-center gap-2">
                        <GlobeAltIcon className="w-4 h-4 text-muted-foreground" />
                        <a href={`https://${selectedResource.contact.website}`} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                          {selectedResource.contact.website}
                        </a>
                      </div>
                    )}
                  </div>
                </div>
                
                <div>
                  <h3 className="font-semibold text-card-foreground mb-2 font-serif">Keywords</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedResource.tags.map((tag) => (
                      <span key={tag} className="bg-muted text-muted-foreground px-2 py-1 rounded text-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="mt-6 flex gap-3">
                <button 
                  onClick={() => setSelectedResource(null)}
                  className="flex-1 bg-secondary text-secondary-foreground py-2 px-4 rounded-lg hover:opacity-90 transition-colors font-medium"
                >
                  Close
                </button>
                <button className="flex-1 bg-primary text-primary-foreground py-2 px-4 rounded-lg hover:opacity-90 transition-opacity font-medium">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}