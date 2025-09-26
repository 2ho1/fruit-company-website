"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function HomePage() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offsetTop = element.offsetTop - 80 // 네비게이션 높이만큼 오프셋
      
      // 커스텀 easing 함수 (ease-out-cubic)
      const easeOutCubic = (t: number): number => 1 - Math.pow(1 - t, 3)
      
      const startPosition = window.pageYOffset
      const distance = offsetTop - startPosition
      const duration = 500 // 0.5초
      let start: number | null = null
      
      const animation = (currentTime: number) => {
        if (start === null) start = currentTime
        const timeElapsed = currentTime - start
        const progress = Math.min(timeElapsed / duration, 1)
        const ease = easeOutCubic(progress)
        
        window.scrollTo(0, startPosition + distance * ease)
        
        if (timeElapsed < duration) {
          requestAnimationFrame(animation)
        }
      }
      
      requestAnimationFrame(animation)
    }
  }
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-8">
              <div className="text-2xl font-bold text-primary">프레시팜</div>
              <div className="hidden md:flex space-x-8">
                <button 
                  onClick={() => scrollToSection('about')} 
                  className="relative text-foreground hover:text-primary transition-all duration-300 group"
                >
                  <span className="relative z-10">회사소개</span>
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></div>
                </button>
                <button 
                  onClick={() => scrollToSection('quality')} 
                  className="relative text-foreground hover:text-primary transition-all duration-300 group"
                >
                  <span className="relative z-10">품질관리</span>
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></div>
                </button>
                <button 
                  onClick={() => scrollToSection('products')} 
                  className="relative text-foreground hover:text-primary transition-all duration-300 group"
                >
                  <span className="relative z-10">과일종류</span>
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></div>
                </button>
                <button 
                  onClick={() => scrollToSection('contact')} 
                  className="relative text-foreground hover:text-primary transition-all duration-300 group"
                >
                  <span className="relative z-10">문의</span>
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></div>
                </button>
              </div>
            </div>
            <Button 
              className="bg-primary text-primary-foreground hover:bg-primary/90"
              onClick={() => scrollToSection('contact')}
            >
              상담 문의
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-background via-muted/30 to-accent/10 pt-16">
        <div className="absolute inset-0 bg-[url('/fresh-fruits-orchard-sunrise.jpg')] bg-cover bg-center opacity-10"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-balance mb-6">
            <span className="text-foreground">신선함이</span>
            <br />
            <span className="text-primary">다른 과일</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground text-balance mb-8 leading-relaxed">
            50여 종의 다양한 과일을 농장에서 직접 수확하여
            <br />
            전국 어디든 신선하게 배송해드립니다
          </p>
          <Button 
            size="lg" 
            className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6"
            onClick={() => scrollToSection('products')}
          >
            카탈로그 보기
          </Button>
        </div>
      </section>

      {/* Core Values */}
      <section id="about" className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-semibold text-primary uppercase tracking-wide mb-4">우리의 약속</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="text-6xl font-bold text-primary">1</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">직접 재배한 신선함</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    자체 농장에서 정성스럽게 키운 과일만을 엄선하여 고객님께 전달합니다.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="text-6xl font-bold text-primary">2</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">품질 보증 시스템</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    수확부터 배송까지 전 과정에서 철저한 품질 관리를 통해 최상의 상태를 유지합니다.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <img src="/modern-fruit-packaging-facility.jpg" alt="품질 관리 시설" className="rounded-lg shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Innovation Section */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-balance mb-4">혁신과 전통이 만나는 곳</h2>
          </div>

          <div className="relative">
            <img src="/modern-fruit-farm-technology-greenhouse.jpg" alt="현대적인 농장 시설" className="w-full rounded-lg shadow-2xl" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent rounded-lg"></div>
            <div className="absolute bottom-8 left-8 right-8">
              <p className="text-lg text-foreground leading-relaxed max-w-3xl">
                프레시팜은 전통적인 농업 방식과 최신 기술을 결합하여 최고 품질의 과일을 생산합니다. 우리는 지속 가능한
                농업을 통해 더 나은 미래를 만들어가고 있습니다.
              </p>
              <Button 
                className="mt-6 bg-primary text-primary-foreground hover:bg-primary/90"
                onClick={() => scrollToSection('quality')}
              >
                더 알아보기
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Global Approach */}
      <section id="quality" className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-balance mb-4">전국 배송 네트워크</h2>
            <p className="text-xl text-muted-foreground text-balance">어디서든 신선한 과일을 만나보세요</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="group hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <img
                  src="/handshake-partnership.png"
                  alt="파트너십"
                  className="w-full h-48 object-cover rounded-lg mb-4 grayscale group-hover:grayscale-0 transition-all"
                />
                <Badge className="mb-3 bg-primary text-primary-foreground">파트너십</Badge>
                <h3 className="text-xl font-semibold mb-2">신뢰할 수 있는 파트너</h3>
                <p className="text-muted-foreground leading-relaxed">
                  전국의 우수한 농가들과 파트너십을 맺어 다양하고 품질 좋은 과일을 공급합니다.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <img
                  src="/modern-logistics-truck.jpg"
                  alt="물류 시스템"
                  className="w-full h-48 object-cover rounded-lg mb-4 grayscale group-hover:grayscale-0 transition-all"
                />
                <Badge className="mb-3 bg-accent text-accent-foreground">물류</Badge>
                <h3 className="text-xl font-semibold mb-2">스마트 물류 시스템</h3>
                <p className="text-muted-foreground leading-relaxed">
                  최신 콜드체인 시스템으로 신선함을 그대로 유지하며 빠르게 배송합니다.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <img
                  src="/quality-control-laboratory.jpg"
                  alt="품질 관리"
                  className="w-full h-48 object-cover rounded-lg mb-4 grayscale group-hover:grayscale-0 transition-all"
                />
                <Badge className="mb-3 bg-primary text-primary-foreground">품질</Badge>
                <h3 className="text-xl font-semibold mb-2">엄격한 품질 관리</h3>
                <p className="text-muted-foreground leading-relaxed">
                  전문 품질 관리팀이 모든 과일의 신선도와 안전성을 철저히 검증합니다.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Fruit Variety Section */}
      <section id="products" className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-balance mb-4">다양한 과일의 세계</h2>
            <p className="text-xl text-muted-foreground text-balance">계절별로 신선한 다양한 과일을 만나보세요</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 mb-12">
            {/* 과일 카테고리들 */}
            <Card className="group hover:shadow-lg transition-all duration-300 hover:scale-105">
              <CardContent className="p-4 text-center">
                <div className="text-4xl mb-2">🍎</div>
                <h3 className="font-semibold text-sm">사과류</h3>
                <p className="text-xs text-muted-foreground mt-1">홍로, 후지, 갈라</p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 hover:scale-105">
              <CardContent className="p-4 text-center">
                <div className="text-4xl mb-2">🍊</div>
                <h3 className="font-semibold text-sm">감귤류</h3>
                <p className="text-xs text-muted-foreground mt-1">제주감귤, 한라봉</p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 hover:scale-105">
              <CardContent className="p-4 text-center">
                <div className="text-4xl mb-2">🍇</div>
                <h3 className="font-semibold text-sm">포도류</h3>
                <p className="text-xs text-muted-foreground mt-1">샤인머스캣, 거봉</p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 hover:scale-105">
              <CardContent className="p-4 text-center">
                <div className="text-4xl mb-2">🍑</div>
                <h3 className="font-semibold text-sm">복숭아류</h3>
                <p className="text-xs text-muted-foreground mt-1">백도, 황도</p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 hover:scale-105">
              <CardContent className="p-4 text-center">
                <div className="text-4xl mb-2">🍓</div>
                <h3 className="font-semibold text-sm">딸기류</h3>
                <p className="text-xs text-muted-foreground mt-1">설향, 킹스베리</p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 hover:scale-105">
              <CardContent className="p-4 text-center">
                <div className="text-4xl mb-2">🥝</div>
                <h3 className="font-semibold text-sm">기타과일</h3>
                <p className="text-xs text-muted-foreground mt-1">키위, 배, 자두</p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-background/50 rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">연중 무휴 신선한 과일</h3>
            <p className="text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              프레시팜은 국내외 우수한 농장과의 파트너십을 통해 계절에 관계없이 
              최고 품질의 다양한 과일을 공급합니다. 제철 과일부터 수입 과일까지, 
              고객님의 다양한 취향을 만족시킬 수 있는 풍부한 선택지를 제공합니다.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-6">
              <Badge variant="secondary" className="px-4 py-2">국산 과일</Badge>
              <Badge variant="secondary" className="px-4 py-2">수입 과일</Badge>
              <Badge variant="secondary" className="px-4 py-2">유기농 과일</Badge>
              <Badge variant="secondary" className="px-4 py-2">프리미엄 과일</Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-balance mb-4">프로젝트 상담 문의</h2>
          <p className="text-xl text-muted-foreground text-balance mb-8 leading-relaxed">
            대량 주문이나 특별한 요구사항이 있으시다면 언제든지 연락해 주세요
          </p>
          <Button 
            size="lg" 
            className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6"
            onClick={() => scrollToSection('contact')}
          >
            지금 상담받기
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold mb-4">프레시팜</div>
              <p className="text-background/80 leading-relaxed">신선한 과일로 건강한 삶을 만들어가는 프레시팜입니다.</p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">회사</h3>
              <ul className="space-y-2 text-background/80">
                <li>
                  <a href="#" className="hover:text-background transition-colors">
                    회사소개
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-background transition-colors">
                    채용정보
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-background transition-colors">
                    뉴스
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">과일 종류</h3>
              <ul className="space-y-2 text-background/80">
                <li>
                  <a href="#" className="hover:text-background transition-colors">
                    사과 & 배
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-background transition-colors">
                    감귤류
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-background transition-colors">
                    포도 & 딸기
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-background transition-colors">
                    복숭아 & 자두
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-background transition-colors">
                    수입 과일
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">고객지원</h3>
              <ul className="space-y-2 text-background/80">
                <li>
                  <a href="#" className="hover:text-background transition-colors">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-background transition-colors">
                    배송 안내
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-background transition-colors">
                    문의하기
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-background/20 mt-12 pt-8 text-center text-background/60">
            <p>&copy; 2025 프레시팜. 모든 권리 보유.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
