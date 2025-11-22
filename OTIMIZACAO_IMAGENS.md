# Guia de Otimização de Imagens e Vídeos

Este guia contém instruções para otimizar as imagens e vídeos do projeto antes do deploy na Vercel.

## 📸 Otimização de Imagens

### Ferramentas Recomendadas

1. **Squoosh** (https://squoosh.app/) - Ferramenta online gratuita
2. **TinyPNG** (https://tinypng.com/) - Compressão automática
3. **ImageOptim** (Mac) ou **FileOptimizer** (Windows) - Desktop

### Formatos Recomendados

- **WebP**: Melhor compressão, suportado por todos os navegadores modernos
- **AVIF**: Ainda melhor compressão, mas suporte limitado
- **JPEG**: Para fotos (qualidade 80-85%)
- **PNG**: Apenas quando necessário transparência

### Tamanhos Recomendados

#### Imagens Principais (Hero, Sobre)
- **Desktop**: Máximo 1920px de largura
- **Mobile**: Máximo 800px de largura
- **Peso**: Máximo 200KB por imagem

#### Posts do Instagram
- **Tamanho**: 1080x1080px (quadrado) ou proporção similar
- **Peso**: Máximo 150KB por imagem

### Processo de Otimização

1. Redimensione a imagem para o tamanho máximo necessário
2. Comprima usando Squoosh ou TinyPNG
3. Salve como WebP quando possível
4. Substitua o arquivo original na pasta `public/`

## 🎥 Otimização de Vídeos

### Ferramentas Recomendadas

1. **HandBrake** (https://handbrake.fr/) - Gratuito e open-source
2. **FFmpeg** - Linha de comando (mais avançado)

### Configurações Recomendadas

#### Para Vídeos do Instagram
- **Codec**: H.264
- **Bitrate**: 2-3 Mbps
- **Resolução**: 1080x1080px (quadrado) ou proporção original
- **FPS**: 30fps
- **Peso**: Máximo 5MB por vídeo (15-30 segundos)

### Comando FFmpeg (Exemplo)

```bash
ffmpeg -i input.mp4 -c:v libx264 -crf 23 -preset medium -c:a aac -b:a 128k -movflags +faststart output.mp4
```

## 📁 Estrutura de Arquivos

```
public/
├── debora-adv/
│   ├── adv-debora-1-seção.jpg (otimizada)
│   └── adv-debora-2-seção.jpg (otimizada)
└── instagram/
    ├── instagram_photo_*.jpg (otimizadas)
    └── instagram_video_*.mp4 (otimizados)
```

## ✅ Checklist Antes do Deploy

- [ ] Todas as imagens foram comprimidas
- [ ] Imagens principais estão em WebP ou JPEG otimizado
- [ ] Vídeos foram comprimidos e otimizados
- [ ] Tamanhos de arquivo estão dentro dos limites recomendados
- [ ] Imagens têm atributos `loading="lazy"` (exceto hero)
- [ ] Imagens têm atributos `decoding="async"`
- [ ] Testado em diferentes dispositivos e conexões

## 🚀 Deploy na Vercel

O projeto já está configurado com:
- ✅ `vercel.json` com cache headers otimizados
- ✅ `vite.config.ts` com code splitting
- ✅ Lazy loading de imagens implementado
- ✅ Otimização de assets no build

Após otimizar as imagens e vídeos, faça o deploy normalmente:

```bash
npm run build
vercel --prod
```

## 📊 Monitoramento

Após o deploy, monitore:
- **Lighthouse Score**: Deve estar acima de 90
- **PageSpeed Insights**: Verificar métricas de performance
- **Vercel Analytics**: Monitorar tempo de carregamento

