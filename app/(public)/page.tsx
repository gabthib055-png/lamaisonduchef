import Link from "next/link";

export default function HomePage() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#0a0a0a', color: '#ffffff', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      {/* Navigation */}
      <header style={{ 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        right: 0, 
        zIndex: 100,
        padding: '24px 48px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        background: 'linear-gradient(to bottom, rgba(0,0,0,0.9), transparent)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          <div style={{ 
            width: '50px', 
            height: '50px', 
            borderRadius: '50%', 
            border: '1px solid rgba(212,175,55,0.6)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '22px',
            fontWeight: '300',
            color: '#d4af37'
          }}>
            M
          </div>
          <div>
            <div style={{ fontSize: '18px', fontWeight: '500', letterSpacing: '0.05em' }}>La Maison du Chef</div>
            <div style={{ fontSize: '10px', letterSpacing: '0.35em', color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase' }}>Paris</div>
          </div>
        </div>
        <nav style={{ display: 'flex', alignItems: 'center', gap: '48px' }}>
          <Link href="/" style={{ color: 'rgba(255,255,255,0.8)', textDecoration: 'none', fontSize: '12px', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: '500' }}>Accueil</Link>
          <Link href="/menu" style={{ color: 'rgba(255,255,255,0.8)', textDecoration: 'none', fontSize: '12px', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: '500' }}>La Carte</Link>
          <Link href="/restaurant" style={{ color: 'rgba(255,255,255,0.8)', textDecoration: 'none', fontSize: '12px', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: '500' }}>Restaurant</Link>
          <Link href="/contact" style={{ 
            padding: '14px 32px',
            backgroundColor: '#d4af37',
            color: '#0a0a0a',
            textDecoration: 'none',
            fontSize: '11px',
            fontWeight: '600',
            letterSpacing: '0.2em',
            textTransform: 'uppercase'
          }}>Réserver</Link>
        </nav>
      </header>

      {/* Hero Section */}
      <section style={{ 
        height: '100vh',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'url(https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&q=90)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.25)'
        }} />
        <div style={{ 
          position: 'relative', 
          zIndex: 10, 
          textAlign: 'center',
          padding: '0 24px',
          maxWidth: '1000px'
        }}>
          <div style={{ 
            fontSize: '11px', 
            letterSpacing: '0.5em', 
            color: '#d4af37',
            marginBottom: '35px',
            textTransform: 'uppercase',
            fontWeight: '500'
          }}>
            Restaurant Gastronomique - Paris 8e
          </div>
          <h1 style={{ 
            fontSize: 'clamp(52px, 9vw, 110px)',
            fontWeight: '300',
            lineHeight: '1.05',
            marginBottom: '35px',
            letterSpacing: '-0.02em'
          }}>
            Une expérience<br />
            <span style={{ fontStyle: 'italic', fontWeight: '400' }}>inoubliable</span>
          </h1>
          <p style={{ 
            fontSize: '18px',
            lineHeight: '1.9',
            color: 'rgba(255,255,255,0.7)',
            maxWidth: '580px',
            margin: '0 auto 55px'
          }}>
            Découvrez une cuisine raffinée où tradition française et créativité 
            se rencontrent pour sublimer chaque instant.
          </p>
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/menu" style={{
              padding: '20px 48px',
              backgroundColor: 'transparent',
              border: '1px solid rgba(255,255,255,0.35)',
              color: '#ffffff',
              textDecoration: 'none',
              fontSize: '11px',
              fontWeight: '500',
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              transition: 'all 0.3s ease'
            }}>
              Découvrir la carte
            </Link>
            <Link href="/contact" style={{
              padding: '20px 48px',
              backgroundColor: '#d4af37',
              border: '1px solid #d4af37',
              color: '#0a0a0a',
              textDecoration: 'none',
              fontSize: '11px',
              fontWeight: '600',
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              transition: 'all 0.3s ease'
            }}>
              Réserver une table
            </Link>
          </div>
        </div>
        {/* Scroll indicator */}
        <div style={{
          position: 'absolute',
          bottom: '50px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '12px'
        }}>
          <span style={{ fontSize: '10px', letterSpacing: '0.4em', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase' }}>Scroll</span>
          <div style={{ width: '1px', height: '70px', background: 'linear-gradient(to bottom, rgba(212,175,55,0.6), transparent)' }} />
        </div>
      </section>

      {/* Intro Section */}
      <section style={{ 
        padding: '180px 48px',
        backgroundColor: '#0a0a0a',
        display: 'flex',
        justifyContent: 'center'
      }}>
        <div style={{ maxWidth: '850px', textAlign: 'center' }}>
          <div style={{ 
            fontSize: '11px', 
            letterSpacing: '0.5em', 
            color: '#d4af37',
            marginBottom: '35px',
            textTransform: 'uppercase',
            fontWeight: '500'
          }}>
            Notre philosophie
          </div>
          <h2 style={{ 
            fontSize: 'clamp(34px, 5vw, 60px)',
            fontWeight: '300',
            lineHeight: '1.25',
            marginBottom: '45px'
          }}>
            {"L'art de sublimer les produits d'exception"}
          </h2>
          <p style={{ 
            fontSize: '17px',
            lineHeight: '2.1',
            color: 'rgba(255,255,255,0.6)'
          }}>
            Depuis 1987, La Maison du Chef perpétue une tradition culinaire exigeante. 
            Notre chef sélectionne chaque jour les meilleurs produits auprès de producteurs 
            locaux passionnés pour créer une cuisine authentique et raffinée.
          </p>
        </div>
      </section>

      {/* Features */}
      <section style={{ 
        padding: '0 48px 180px',
        backgroundColor: '#0a0a0a'
      }}>
        <div style={{ 
          maxWidth: '1400px', 
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '2px',
          backgroundColor: 'rgba(212,175,55,0.2)'
        }}>
          {[
            {
              number: '01',
              title: 'Produits Nobles',
              description: 'Sélection rigoureuse auprès de producteurs locaux, pêcheurs et maraîchers engagés dans une démarche durable.'
            },
            {
              number: '02',
              title: 'Savoir-Faire',
              description: 'Techniques traditionnelles françaises et créativité contemporaine pour des plats signatures uniques.'
            },
            {
              number: '03',
              title: 'Accords Parfaits',
              description: 'Notre sommelier compose des accords mets-vins exceptionnels pour sublimer chaque bouchée.'
            }
          ].map((feature) => (
            <div key={feature.number} style={{
              padding: '60px 50px',
              backgroundColor: '#0a0a0a'
            }}>
              <div style={{ 
                fontSize: '56px',
                fontWeight: '200',
                color: 'rgba(212,175,55,0.25)',
                marginBottom: '35px',
                lineHeight: '1'
              }}>
                {feature.number}
              </div>
              <h3 style={{ 
                fontSize: '26px',
                fontWeight: '400',
                marginBottom: '20px',
                letterSpacing: '0.01em'
              }}>
                {feature.title}
              </h3>
              <p style={{ 
                fontSize: '15px',
                lineHeight: '1.9',
                color: 'rgba(255,255,255,0.55)'
              }}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Image + Text Section */}
      <section style={{ 
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        minHeight: '100vh'
      }}>
        <div style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?w=1200&q=90)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }} />
        <div style={{
          backgroundColor: '#111111',
          padding: '120px 90px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center'
        }}>
          <div style={{ 
            fontSize: '11px', 
            letterSpacing: '0.5em', 
            color: '#d4af37',
            marginBottom: '30px',
            textTransform: 'uppercase',
            fontWeight: '500'
          }}>
            Le Chef
          </div>
          <h2 style={{ 
            fontSize: 'clamp(38px, 4vw, 56px)',
            fontWeight: '300',
            lineHeight: '1.15',
            marginBottom: '35px'
          }}>
            Michel Dupont
          </h2>
          <p style={{ 
            fontSize: '16px',
            lineHeight: '2',
            color: 'rgba(255,255,255,0.6)',
            marginBottom: '25px'
          }}>
            Formé auprès des plus grands noms de la gastronomie française, 
            Michel Dupont a développé une signature culinaire unique, 
            alliant respect des traditions et audace créative.
          </p>
          <p style={{ 
            fontSize: '16px',
            lineHeight: '2',
            color: 'rgba(255,255,255,0.6)',
            marginBottom: '50px'
          }}>
            {"Sa philosophie : magnifier les produits d'exception sans jamais les dénaturer."}
          </p>
          <div style={{ display: 'flex', gap: '70px' }}>
            <div>
              <div style={{ fontSize: '48px', fontWeight: '200', color: '#d4af37', lineHeight: '1' }}>2</div>
              <div style={{ fontSize: '11px', letterSpacing: '0.25em', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', marginTop: '10px' }}>Étoiles Michelin</div>
            </div>
            <div>
              <div style={{ fontSize: '48px', fontWeight: '200', color: '#d4af37', lineHeight: '1' }}>37</div>
              <div style={{ fontSize: '11px', letterSpacing: '0.25em', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', marginTop: '10px' }}>{"Années d'excellence"}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Preview */}
      <section style={{ 
        padding: '180px 48px',
        backgroundColor: '#0a0a0a'
      }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ 
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            marginBottom: '90px',
            flexWrap: 'wrap',
            gap: '30px'
          }}>
            <div>
              <div style={{ 
                fontSize: '11px', 
                letterSpacing: '0.5em', 
                color: '#d4af37',
                marginBottom: '20px',
                textTransform: 'uppercase',
                fontWeight: '500'
              }}>
                La Carte
              </div>
              <h2 style={{ 
                fontSize: 'clamp(38px, 4vw, 60px)',
                fontWeight: '300'
              }}>
                Nos créations
              </h2>
            </div>
            <Link href="/menu" style={{
              padding: '18px 45px',
              border: '1px solid rgba(255,255,255,0.25)',
              color: '#ffffff',
              textDecoration: 'none',
              fontSize: '11px',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              fontWeight: '500'
            }}>
              Voir la carte complète
            </Link>
          </div>

          <div style={{ 
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '35px'
          }}>
            {[
              {
                name: 'Saint-Jacques Snackées',
                description: 'Purée de céleri-rave, émulsion au yuzu, caviar Osciètre',
                price: '48',
                image: 'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=800&q=90'
              },
              {
                name: 'Homard Bleu de Bretagne',
                description: 'Bisque légère infusée au combava, légumes de saison',
                price: '75',
                image: 'https://images.unsplash.com/photo-1553247407-23251ce81f59?w=800&q=90'
              },
              {
                name: 'Pigeon en Croûte de Sel',
                description: 'Foie gras poêlé, sauce Périgueux aux truffes',
                price: '62',
                image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=800&q=90'
              }
            ].map((dish, index) => (
              <div key={index} style={{ position: 'relative', overflow: 'hidden' }}>
                <div style={{
                  aspectRatio: '4/5',
                  backgroundImage: `url(${dish.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  marginBottom: '28px'
                }} />
                <div style={{ 
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  gap: '20px'
                }}>
                  <div>
                    <h3 style={{ 
                      fontSize: '22px',
                      fontWeight: '400',
                      marginBottom: '10px'
                    }}>
                      {dish.name}
                    </h3>
                    <p style={{ 
                      fontSize: '14px',
                      color: 'rgba(255,255,255,0.5)',
                      lineHeight: '1.6'
                    }}>
                      {dish.description}
                    </p>
                  </div>
                  <div style={{ 
                    fontSize: '22px',
                    color: '#d4af37',
                    fontWeight: '300',
                    whiteSpace: 'nowrap'
                  }}>
                    {dish.price} €
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reservation CTA */}
      <section style={{ 
        padding: '180px 48px',
        backgroundColor: '#111111',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '750px', margin: '0 auto' }}>
          <div style={{ 
            fontSize: '11px', 
            letterSpacing: '0.5em', 
            color: '#d4af37',
            marginBottom: '35px',
            textTransform: 'uppercase',
            fontWeight: '500'
          }}>
            Réservation
          </div>
          <h2 style={{ 
            fontSize: 'clamp(38px, 5vw, 64px)',
            fontWeight: '300',
            lineHeight: '1.15',
            marginBottom: '35px'
          }}>
            Réservez votre table
          </h2>
          <p style={{ 
            fontSize: '17px',
            lineHeight: '2',
            color: 'rgba(255,255,255,0.6)',
            marginBottom: '55px'
          }}>
            Du mardi au samedi, notre équipe vous accueille dans un cadre 
            élégant et intimiste pour un moment de gastronomie unique.
          </p>
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" style={{
              padding: '22px 55px',
              backgroundColor: '#d4af37',
              color: '#0a0a0a',
              textDecoration: 'none',
              fontSize: '11px',
              fontWeight: '600',
              letterSpacing: '0.25em',
              textTransform: 'uppercase'
            }}>
              Réserver en ligne
            </Link>
            <a href="tel:+33123456789" style={{
              padding: '22px 55px',
              border: '1px solid rgba(255,255,255,0.25)',
              color: '#ffffff',
              textDecoration: 'none',
              fontSize: '11px',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              fontWeight: '500'
            }}>
              +33 1 23 45 67 89
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ 
        padding: '100px 48px 60px',
        backgroundColor: '#0a0a0a',
        borderTop: '1px solid rgba(255,255,255,0.08)'
      }}>
        <div style={{ 
          maxWidth: '1400px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '2fr 1fr 1fr 1fr',
          gap: '80px'
        }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '30px' }}>
              <div style={{ 
                width: '50px', 
                height: '50px', 
                borderRadius: '50%', 
                border: '1px solid rgba(212,175,55,0.5)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '22px',
                fontWeight: '300',
                color: '#d4af37'
              }}>
                M
              </div>
              <div>
                <div style={{ fontSize: '18px', fontWeight: '500', letterSpacing: '0.05em' }}>La Maison du Chef</div>
                <div style={{ fontSize: '10px', letterSpacing: '0.35em', color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase' }}>Restaurant Gastronomique</div>
              </div>
            </div>
            <p style={{ fontSize: '14px', lineHeight: '1.9', color: 'rgba(255,255,255,0.5)', maxWidth: '380px' }}>
              Une expérience gastronomique unique au coeur de Paris, 
              où tradition et modernité se rencontrent depuis 1987.
            </p>
          </div>
          <div>
            <h4 style={{ fontSize: '11px', letterSpacing: '0.25em', marginBottom: '30px', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', fontWeight: '600' }}>Navigation</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
              <Link href="/" style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none', fontSize: '14px' }}>Accueil</Link>
              <Link href="/menu" style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none', fontSize: '14px' }}>La Carte</Link>
              <Link href="/restaurant" style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none', fontSize: '14px' }}>Le Restaurant</Link>
              <Link href="/contact" style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none', fontSize: '14px' }}>Contact</Link>
            </div>
          </div>
          <div>
            <h4 style={{ fontSize: '11px', letterSpacing: '0.25em', marginBottom: '30px', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', fontWeight: '600' }}>Contact</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '18px', color: 'rgba(255,255,255,0.6)', fontSize: '14px' }}>
              <p>12 Rue de la Gastronomie<br />75008 Paris</p>
              <a href="tel:+33123456789" style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none' }}>+33 1 23 45 67 89</a>
              <a href="mailto:contact@lamaisonduchef.fr" style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none' }}>contact@lamaisonduchef.fr</a>
            </div>
          </div>
          <div>
            <h4 style={{ fontSize: '11px', letterSpacing: '0.25em', marginBottom: '30px', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', fontWeight: '600' }}>Horaires</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', color: 'rgba(255,255,255,0.6)', fontSize: '14px' }}>
              <p>Mardi - Samedi</p>
              <p>12h00 - 14h30</p>
              <p>19h00 - 22h30</p>
              <p style={{ marginTop: '12px', color: 'rgba(255,255,255,0.35)' }}>Dimanche & Lundi : Fermé</p>
            </div>
          </div>
        </div>
        <div style={{ 
          maxWidth: '1400px',
          margin: '70px auto 0',
          paddingTop: '35px',
          borderTop: '1px solid rgba(255,255,255,0.08)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          color: 'rgba(255,255,255,0.3)',
          fontSize: '12px',
          flexWrap: 'wrap',
          gap: '20px'
        }}>
          <p>© 2025 La Maison du Chef. Tous droits réservés.</p>
          <div style={{ display: 'flex', gap: '35px' }}>
            <Link href="/mentions-legales" style={{ color: 'rgba(255,255,255,0.3)', textDecoration: 'none' }}>Mentions légales</Link>
            <Link href="/confidentialite" style={{ color: 'rgba(255,255,255,0.3)', textDecoration: 'none' }}>Confidentialité</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
